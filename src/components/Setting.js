import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';

function Setting() {
    const [power1, setPower1] = useState('');
    const [power2, setPower2] = useState('');
    const [power3, setPower3] = useState('');

     // Function to handle form submission
     const handleSubmit = async (event) => {
        event.preventDefault(); // Prevent default form submission behavior

        // Here you can use power1, power2, and power3 values
        console.log('Power 1:', power1);
        console.log('Power 2:', power2);
        console.log('Power 3:', power3);

        // Add your logic to use the form data
        try {
            const response = await fetch('http://localhost:5000/run-python', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    power1: power1,
                    power2: power2,
                    power3: power3,
                }),
            });
    
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
    
            const data = await response.text();
            console.log('Server response:', data);
            // Perform actions with the server response if needed
        } catch (error) {
            console.error('There was an error!', error);
        }
        
    };

    return (
        <Form className='m-5'>
          <Form.Group className="d-flex flex-column gap-2 w-25 pb-2" st controlId="exampleForm.ControlInput1">
                <Form.Label>Power 1</Form.Label>
                <Form.Control
                    type="number"
                    placeholder="0"
                    value={power1}
                    onChange={(e) => setPower1(e.target.value)}
                />
                <Form.Label>Power 2</Form.Label>
                <Form.Control
                    type="number"
                    placeholder="0"
                    value={power2}
                    onChange={(e) => setPower2(e.target.value)}
                />
                <Form.Label>Power 3</Form.Label>
                <Form.Control
                    type="number"
                    placeholder="0"
                    value={power3}
                    onChange={(e) => setPower3(e.target.value)}
                />
          </Form.Group>
          <Button variant="primary" type="submit" onClick={handleSubmit}> Submit</Button>
        </Form>
      );
    };
    

export default Setting;