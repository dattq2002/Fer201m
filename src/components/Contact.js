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
                        Choose your favourite video
                    </option>
                    <option disabled value='1'>
                        Star Wars: Episode IV - A New Hope
                    </option>
                    <option disabled value='2'>
                        Star Wars: Episode IV - A New Hope
                    </option>
                    <option disabled value='3'>
                        Avengers: Cuộc chiến vô cực
                    </option>
                    <option disabled value='4'>
                        Phù thủy tối thượng
                    </option>
                    <option disabled value='5'>
                        Phù thủy tối thượng
                    </option>
                    <option disabled value='6'>
                        Gonjiam: Bệnh viện ma ám
                    </option>
                    <option disabled value='7'>
                        Ngôi trường xác sống (All of Us Are Dead)
                    </option>
                    <option disabled value='8'>
                        Bỗng dưng trúng số
                    </option>
                    <option disabled value='9'>
                        Diệp Vấn
                    </option>
                </Select>
                <Textarea id="Textarea-28" label="Your content" />
                <Button>Submit</Button>
            </form>
        </Container>
    )
}
