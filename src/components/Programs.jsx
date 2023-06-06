import {GiGraduateCap} from 'react-icons/gi'
import SectionHead from './SectionHead'
import {programs } from '../data'
import Card from './Card2'



const Programs = () => {
    return (
        <section className='programs'>
            <div className='container programs_container' id='programs'>
                <SectionHead icon= {<GiGraduateCap />} title = "At CBB, student inmates learn skills high in the demand in the global job market, effectively doubling thier chances of getting employed  upon release from prison." />
            
                <div className='programs__wrapper'>
                    {
                        programs.map(({id, icon, title}) =>{
                            return (
                                <Card className="programs__program" key ={id}>
                                    <span>{icon}</span>
                                    <h4>{title}</h4>
                                </Card>
                            )
                        } )
                    }
                </div>
            </div>
        </section>
    )
}

export default Programs
