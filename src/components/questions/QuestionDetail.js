import '../../customcss/questions.css';
import React from 'react';
import { useState, useEffect } from 'react';
import { useParams, Link, useLocation } from 'react-router-dom';
import { Container, Button } from 'react-bootstrap'
import { useCurrentUser } from '../../contexts/CurrentUserContext';
import { axiosReq } from '../../api/axiosDefaults';


function QuestionDetail() {
    const currentUser = useCurrentUser();
    const params = useParams()
    const [questions, setQuestions] = useState([])
    const [hasLoaded, setHasLoaded] = useState(false);
    const { pathname } = useLocation();

    useEffect(() => {
        const fetchQuestions = async () => {
            try {
                const { data } = await axiosReq.get(`https://stack-drf-api.herokuapp.com/questions/${params.id}`);
                setQuestions(data);
                setHasLoaded(true);
            } catch (err) {
                console.log(err);
            }
        };

        setHasLoaded(false);
        const timer = setTimeout(() => {
            fetchQuestions();
        }, 1000);

        return () => {
            clearTimeout(timer);
        };
    }, [pathname, params.id]);    

    if (!questions) return null;

    return (
    <div className='parentdivmargin'>
        <Container className='list mt-5'>
        <h1>Question details.</h1>  

        <br/>

            <div className='individualq'>
            <h2 className=''>{questions.summary}</h2>
            <p className='m-0'>{questions.question}</p>

            <br/>

            <p>This question was created by <strong>{questions.owner}</strong> on <strong>{questions.created_at}</strong>.</p>
            <p><strong>{questions.owner}</strong> last updated this question on <strong>{questions.updated_at}</strong></p>
                        
            </div>

            {hasLoaded ? (

                currentUser && currentUser.username === questions.owner ?  
                    <>
                    <Link className='unstylelinkbutton' to={`/questions/${questions.id}/edit/${questions.owner}`}><Button>Edit</Button></Link> 
                    <br/>
                    <br/>
                    <Link className='unstylelinkbutton' to={`/questions/${questions.id}/add/${questions.owner}`}><Button variant='success'>Add Answer</Button></Link>
                    <br/>   
                    </>    
                    : 
                    <>
                    <Link className='unstylelinkbutton' to={`/questions/${questions.id}/add/${questions.owner}`}><Button variant='success'>Add Answer</Button></Link>
                    <br/>
                    </>
                

            ) : (

                <h1>Data loading.</h1>

            )
            }

            
        <br/><br/><hr/><br/><br/>
    
        </Container>           
    </div>
    )
}


export default QuestionDetail;