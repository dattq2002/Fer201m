import { Button, Container, Select, TextInput, Textarea } from "react-materialize";

export default function Contact() {
    const handleSubmit = (e) => {
        e.preventDefault();
    }
    return (
        <Container>
            <h3>Contact us</h3>
            <form onSubmit={handleSubmit}>
                <TextInput id='TextInput-38' label='Your Name' />
                <TextInput id='TextInput-39' label='Your Phone' />
                <TextInput id='TextInput-41' label='Email' validate />
                <Select id='Select-46' multiple={false} onChange={function noRefCheck() { }} value="">
                    <option disabled value=''>
                        Choose your favourite nation
                    </option>
                    <option disabled value='1'>
                        England
                    </option>
                    <option disabled value='2'>
                        France
                    </option>
                    <option disabled value='3'>
                        Spain
                    </option>
                </Select>
                <Textarea id="Textarea-28" label="Your content"/>
                <Button>Submit</Button>
            </form>
        </Container>
    )
}
