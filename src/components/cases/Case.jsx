import { Container, Heading } from '@chakra-ui/react'
import PropTypes from 'prop-types'
import CrimeTagList from '../events/CrimeTagList'



const Case = (props) => {

    const { title, offence_tags  } = props.attributes


    return (
        <Container p = {2}>
            <Heading size = 'md'>
                {title}
            </Heading>
            <CrimeTagList tags = {offence_tags.data} />
        </Container>   
    )

}

export default Case

Case.propTypes = {
    id: PropTypes.string,
    attributes: PropTypes.object
};