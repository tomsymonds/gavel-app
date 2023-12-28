import { useRecoilState } from 'recoil'
import { errorAtom } from '../state/atoms'
import { appSettings } from '../settings/appSettings'
import Error from '../components/error'

const useErrors = () => {

    const noShowStatuses = appSettings.errors.noShowStatuses
    const noShowMessages = appSettings.errors.noShowMessages
    const remapMessages = appSettings.errors.remapMessages
    const [error, setError] = useRecoilState(errorAtom)

    const remove = () => {
        console.log('remove')
        setError(null)
    }

    const set = (newError) => {
        setError(newError)
    }

    const showError = () => {
        return !error || (!noShowStatuses.includes(error.status) && !noShowMessages.includes(error.message))
    }

    const outputMessage = () => {
        return remapMessages[error.status] || error.message
    }

    const alert = () => {
        return <Error error = {error} message = {outputMessage} onClose = {remove()} />
    }

    return {
        status: error && error.status,
        message: error && outputMessage(),
        set, remove,
        close: () => remove(),
        showError,
        alert
    }


}

export default useErrors