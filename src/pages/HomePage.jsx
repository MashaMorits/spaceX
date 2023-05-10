import rocketLine from '../images/rocketLine.png'

function HomePage() {
    return ( 
        <div className="HomePage page" >
            
            <div className='first__screen'>
                <div className="container">
                    <div className="first__screen-wrapper">
                        <div className="first__screen-left">
                            <div className='title'>
                                <h1>Путешествие</h1>
                                <p>на красную планету</p>
                            </div>
                            <div className="first__screen-left-button">
                                <div className="button">
                                    <p>Начать путешествие</p>                                  
                                </div>
                                
                            </div>
                            <img className='rocketLine' src={rocketLine} alt="" />  
                           
                        </div>
                        <div className="first__screen-right">
                            <div className="benefit">
                                <div className="benefit__item">
                                    <p>мы</p>
                                    <span>1</span>
                                    <p>на рынке</p>
                                </div>
                                <div className="benefit__item">
                                    <p>гарантируем</p>
                                    <span>50%</span>
                                    <p>безопасность</p>
                                </div>
                                <div className="benefit__item">
                                    <p>календарик за</p>
                                    <span>2001г.</span>
                                    <p>в подарок</p>
                                </div>
                                <div className="benefit__item">
                                    <p>путешествие</p>
                                    <span>597</span>
                                    <p>дней</p>
                                </div>
                            </div>
                        </div>
                    </div>                    
                </div>                
            </div>
        </div>
     );
}

export default HomePage;