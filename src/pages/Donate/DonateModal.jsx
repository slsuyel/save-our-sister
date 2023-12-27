/* eslint-disable react/prop-types */
import bkash from '../../assets/images/BKash-bKash-Logo.wine.svg'
import nagad from '../../assets/images/download.png'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';

const DonateModal = ({ show, setShow }) => {

    const bkashNo = '01722597565'
    const nagadNo = '01745658989'
    const [copiedNumber, setCopiedNumber] = useState(null);
    const [formData, setFormData] = useState({
        name: '',
        address: '',
        amount: '',
        phoneNumber: '',
        transactionNumber: '',
        paymentMethod: 'bkash',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Perform actions with the form data, e.g., send it to the server
        console.log('Form data submitted:', formData);
        // Close the modal after form submission
        handleClose();
    };

    const handleClose = () => {

        setFormData({
            name: '',
            address: '',
            amount: '',
            phoneNumber: '',
            transactionNumber: '',
            paymentMethod: 'bkash',
        });
        setShow(false);
    };



    const handleCopy = (data) => {
        navigator.clipboard.writeText(data);
        setCopiedNumber(data)
    }


    return (
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Donation Form</Modal.Title>
            </Modal.Header>
            <Modal.Body>

                <div className='bg-body-secondary d-flex fw-bold justify-content-around mb-2 text-danger px-2'>
                    <div className='text-start w-50'>
                        <img src={bkash} alt="" width={80} height={50} />
                        <h6>
                            {bkashNo}
                            {copiedNumber === bkashNo ? <span className='ms-2 text-success'> Copied</span> : <i onClick={() => handleCopy(bkashNo)} className="fa-solid fa-copy text-warning-emphasis ms-2"></i>}
                        </h6>
                    </div>
                    <div className='text-end w-50'>
                        <img src={nagad} alt="" width={80} height={50} />
                        <h6>
                            {nagadNo}
                            {copiedNumber === nagadNo ? <span className='ms-2 text-success'> Copied</span> : <i onClick={() => handleCopy(nagadNo)} className="fa-solid fa-copy text-warning-emphasis ms-2"></i>}
                        </h6>
                    </div>



                </div>

                <Form onSubmit={handleSubmit}>
                    <Form.Group controlId="formName">
                        {/* <Form.Label>Name</Form.Label> */}
                        <Form.Control
                            className='my-1'
                            type="text"
                            placeholder="Enter your name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                        />
                    </Form.Group>
                    <Form.Group controlId="formAddress">
                        {/* <Form.Label>Address</Form.Label> */}
                        <Form.Control
                            className='my-1'
                            type="text"
                            placeholder="Enter your address"
                            name="address"
                            value={formData.address}
                            onChange={handleChange}
                            required
                        />
                    </Form.Group>

                    <Form.Group controlId="formAmmount">
                        {/* <Form.Label>Phone Number</Form.Label> */}
                        <Form.Control
                            className='my-1'
                            type="number"
                            placeholder="Enter your amount"
                            name="amount"
                            value={formData.amount}
                            onChange={handleChange}
                            required
                        />
                    </Form.Group>

                    <Form.Group controlId="formPhoneNumber">
                        {/* <Form.Label>Phone Number</Form.Label> */}
                        <Form.Control
                            className='my-1'
                            type="tel"
                            placeholder="Enter your phone number"
                            name="phoneNumber"
                            value={formData.phoneNumber}
                            onChange={handleChange}
                            required
                        />
                    </Form.Group>
                    <Form.Group controlId="formTransactionNumber">
                        {/* <Form.Label>Transaction Number</Form.Label> */}
                        <Form.Control
                            className='my-1'
                            type="text"
                            placeholder="Enter transaction number"
                            name="transactionNumber"
                            value={formData.transactionNumber}
                            onChange={handleChange}
                            required
                        />
                    </Form.Group>
                    <Form.Group controlId="formPaymentMethod">
                        {/* <Form.Label>Payment Method</Form.Label> */}
                        <Form.Control
                            className='my-1'
                            as="select"
                            name="paymentMethod"
                            value={formData.paymentMethod}
                            onChange={handleChange}
                        >
                            <option value="bkash">Bkash</option>
                            <option value="nagad">Nagad</option>
                        </Form.Control>
                    </Form.Group>
                    <div className='d-flex gap-3 mt-3'>
                        <Button variant="secondary" onClick={handleClose}>
                            Close
                        </Button>
                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                    </div>
                </Form>
            </Modal.Body>
        </Modal>
    );
};

export default DonateModal;
