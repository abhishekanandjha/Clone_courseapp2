import React,{useEffect,useState} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container,Button,Stack } from 'react-bootstrap';
import imgsorce from "../assets/60111.jpg";
import { BsFillBookFill,BsFillClockFill } from "react-icons/bs";
import { IoLanguage } from "react-icons/io5";
import { MdAssignmentInd, MdAssignmentAdd } from "react-icons/md";
// google pay
import GooglePayButton from '@google-pay/button-react';


const Video = () => {
// function Video(){

    const [isSticky, setIsSticky] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
        const isBottom = window.innerHeight + window.scrollY >= document.body.offsetHeight;
        setIsSticky(isBottom);
        };

        window.addEventListener('scroll', handleScroll);

        // Clean up the event listener on component unmount
        return () => {
        window.removeEventListener('scroll', handleScroll);
        };
    }, []);




    return(
        <>
            <div className="image-wrapper">
                    <h2>"logo"</h2>
            </div>
            <div className="image-wrapper container-behind">
                <h2>Shorts Hack with "Your Name"</h2>
                <img className="imgsize" src={imgsorce} alt="your pic"/>
                <h5>Teacher</h5>
                <h5>"Logo"</h5>
                
                <div className="sticky-container container-overlap">
                <Container >  {/* className={`sticky-container ${isSticky ? 'sticky' : ''}`} */}
                    
                        <iframe src="https://www.youtube.com/embed/xcJtL7QggTI" title="Sony 4K Demo: Another World" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                        <div className="txtclr">
                            <s><span>₹999</span></s><h2> ₹599</h2>
                        </div>
                        <Stack direction="horizontal" gap={2}>
                            {/* <Button as="a" variant="primary">
                                Button as link
                            </Button> */}
                            <GooglePayButton
                                environment="TEST"
                                paymentRequest={{
                                    apiVersion: 2,
                                    apiVersionMinor: 0,
                                    allowedPaymentMethods: [
                                    {
                                        type: 'CARD',
                                        parameters: {
                                        allowedAuthMethods: ['PAN_ONLY', 'CRYPTOGRAM_3DS'],
                                        allowedCardNetworks: ['MASTERCARD', 'VISA'],
                                        },
                                        tokenizationSpecification: {
                                        type: 'PAYMENT_GATEWAY',
                                        parameters: {
                                            gateway: 'example',
                                            gatewayMerchantId: 'exampleGatewayMerchantId',
                                        },
                                        },
                                    },
                                    ],
                                    merchantInfo: {
                                    merchantId: '12345678901234567890',
                                    merchantName: 'Abhishek Anand Jha(demo you will not be charged)',
                                    },
                                    transactionInfo: {
                                    totalPriceStatus: 'FINAL',
                                    totalPriceLabel: 'Total',
                                    totalPrice: '599.00',
                                    currencyCode: 'INR',
                                    countryCode: 'IN',
                                    },
                                }}
                                onLoadPaymentData={paymentRequest => {
                                    console.log('load payment data', paymentRequest);
                                }}
                            />
                            {/* <Button as="a" variant="success">
                                BUY NOW
                            </Button> */}
                        </Stack>
                        <div className="txtclr">
                            <br></br>
                            <br></br>
                            <h3>Course Features</h3>
                            <p> <BsFillBookFill/>   Lectures 11</p>
                            <p> <BsFillClockFill/>  Duration 10 days</p>
                            <p><IoLanguage/>  Language Hindi</p>
                            <p><MdAssignmentInd/>  Students 3181</p>
                            <p><MdAssignmentAdd/>  Assessments Yes</p>
                            
                        </div>
                        
                </Container>
                </div>
            </div>
    </>
    );
}

export default Video;



{/* <iframe width="1380" height="494" src="https://www.youtube.com/embed/xcJtL7QggTI" title="Sony 4K Demo: Another World" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> */}