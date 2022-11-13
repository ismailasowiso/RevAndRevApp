import React from 'react';
import { IFilterLangueProps, IFilterLanguePropsState } from '../Interfaces/IFilterLangueComponent';
import Button from 'react-bootstrap/Button';

export class FilterLangue extends React.Component<IFilterLangueProps, IFilterLanguePropsState>{
    constructor(props: any) {
        super(props);

        this.state = {
            
        }
    }
    componentDidMount() {

    }
    render(): JSX.Element {
        return (
            <div className='Langue'>
                {
                    this.props.Langue=="" ? 
                        <div className='LangInit'>
                            <Button variant="outline-success" className='LangInitFr'>
                                <div className='LangInitFrImg'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="640" height="480">
                                        <g fill-rule="evenodd" stroke-width="1pt">
                                            <path fill="#fff" d="M0 0h640v480H0z"/>
                                            <path fill="#00267f" d="M0 0h213.337v480H0z"/>
                                            <path fill="#f31830" d="M426.662 0H640v480H426.662z"/>
                                        </g>
                                    </svg>
                                </div>
                                <div className='LangInitFrTxt'>Français</div>
                            </Button>
                            <Button variant="outline-light" className='LangInitEn'>
                                <div className='LangInitEnImg'>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                        <path fill="#f0f0f0" d="M0 85.333h512V426.67H0z"/>
                                        <path fill="#d80027" d="M288 85.33h-64v138.666H0v64h224v138.666h64V287.996h224v-64H288z"/>
                                        <path fill="#0052b4" d="M393.785 315.358 512 381.034v-65.676zM311.652 315.358 512 426.662v-31.474l-143.693-79.83zM458.634 426.662l-146.982-81.664v81.664z"/>
                                        <path fill="#f0f0f0" d="M311.652 315.358 512 426.662v-31.474l-143.693-79.83z"/>
                                        <path fill="#d80027" d="M311.652 315.358 512 426.662v-31.474l-143.693-79.83z"/>
                                        <path fill="#0052b4" d="M90.341 315.356 0 365.546v-50.19zM200.348 329.51v97.151H25.491z"/>
                                        <path fill="#d80027" d="M143.693 315.358 0 395.188v31.474l200.348-111.304z"/>
                                        <path fill="#0052b4" d="M118.215 196.634 0 130.958v65.676zM200.348 196.634 0 85.33v31.474l143.693 79.83zM53.366 85.33l146.982 81.664V85.33z"/>
                                        <path fill="#f0f0f0" d="M200.348 196.634 0 85.33v31.474l143.693 79.83z"/>
                                        <path fill="#d80027" d="M200.348 196.634 0 85.33v31.474l143.693 79.83z"/>
                                        <path fill="#0052b4" d="M421.659 196.636 512 146.446v50.19zM311.652 182.482V85.331h174.857z"/>
                                        <path fill="#d80027" d="M368.307 196.634 512 116.804V85.33L311.652 196.634z"/>
                                    </svg>
                                </div>
                                <div className='LangInitEnTxt'>Anglais</div>
                            </Button>
                            <Button variant="outline-danger" className='LangInitAr'>
                                <div className='LangInitArImg'>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                        <path fill="#f0f0f0" d="M0 85.337h512v341.326H0z"/>
                                        <path d="M0 85.337h512v113.775H0z"/>
                                        <path fill="#496e2d" d="M0 312.888h512v113.775H0z"/>
                                        <path fill="#d80027" d="M256 256.006 0 426.668V85.331zM305.716 256c0-19.892 13.98-36.51 32.649-40.587a41.66 41.66 0 0 0-8.904-.966c-22.95 0-41.553 18.603-41.553 41.553s18.603 41.553 41.553 41.553c3.058 0 6.035-.339 8.904-.966-18.669-4.077-32.649-20.695-32.649-40.587z"/>
                                        <path fill="#d80027" d="m340.112 229.287 5.894 18.14h19.072l-15.43 11.211 5.894 18.139-15.43-11.21-15.431 11.21 5.895-18.139-15.431-11.211h19.072z"/>
                                    </svg>
                                </div>
                                <div className='LangInitArTxt'>Arabe</div>
                            </Button>
                        </div> :
                    <div className='LangChang'></div>

                }
            
            </div>
        );
    }
}

export default FilterLangue;