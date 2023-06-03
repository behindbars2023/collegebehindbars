import {GiGraduateCap} from 'react-icons/gi'
import SectionHead from './SectionHead'
import {programs } from '../data'
import Card from './Card2'



const Programs = () => {
    return (
        <section className='programs'>
            <div className='container programs_container'>
                <SectionHead icon= {<GiGraduateCap />} title = "Students apply the taught material to build a website centered on addressing challenges to affect social impact in their communities. Topics include domestic violence and addiction." />
            
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
