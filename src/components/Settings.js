import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import Graph from './Graph';
import { db } from "../firebase";
import { doc, setDoc } from "firebase/firestore"; 


function Settings() {
    const [power1, setPower1] = useState('');
    const [power2, setPower2] = useState('');
    const [power3, setPower3] = useState('');
    const [labels, setLabels] = useState(['Start']);
    const [data, setData] = useState([0]);

    const [isPlanting, setIsPlanting] = useState(false);

    function getCurrentDateFormatted() {
        var today = new Date();
        var dd = String(today.getDate()).padStart(2, '0');
        var mm = String(today.getMonth() + 1).padStart(2, '0'); // January is 0!
        var yy = today.getFullYear().toString().substring(-2);
        yy = yy.slice(-2);
    
        return mm + '-' + dd + '-' + yy;
    }

    const handleEnd = async (event) => {
        event.preventDefault();
        console.log(data, labels)
        setIsPlanting(false);
        
        await setDoc(doc(db, "seeds", getCurrentDateFormatted()), {
            seeds: data,
            times: labels
        })
    }

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
            setIsPlanting(true);

            // Perform actions with the server response if needed
        } catch (error) {
            console.error('There was an error!', error);
        }
        
    };

    return (
        <div className="d-flex justify-content-between m-5">
            <Form className='' style={{width: '35%'}}>

                <Form.Group className="d-flex flex-column" st controlId="exampleForm.ControlInput1">
                    <Form.Label>Total Seeds to Plant</Form.Label>
                    <Form.Control
                        type="number"
                        placeholder="5"
                        value={power1}
                        onChange={(e) => setPower1(e.target.value)}
                    />
                    <Form.Label>Distance between each seed (feet)</Form.Label>
                    <Form.Control
                        placeholder="1"
                        value={power2}
                        onChange={(e) => setPower2(e.target.value)}
                    />
                    <Form.Label>Power</Form.Label>
                    <Form.Control
                        type="number"
                        placeholder="1-5"
                        value={power3}
                        onChange={(e) => setPower3(e.target.value)}
                    />
                </Form.Group>
                <Button className='mt-2' variant="primary" type="submit" onClick={handleSubmit}> Start!</Button>
                <Button className='mt-2' variant="primary" type="submit" onClick={handleEnd}> End!</Button>
            </Form>

            <Graph isPlanting={isPlanting} setIsPlanting={setIsPlanting} setLabels={setLabels} setData={setData}/>
        </div>
        
      );
    };
    

export default Settings;