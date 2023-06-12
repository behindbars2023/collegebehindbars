import { GiGraduateCap } from 'react-icons/gi'
import SectionHead from './SectionHead'
import { programs } from '../data'
import Card from './Card2'
import stack from "../images/stack.png"
import Accordion from './Stack'


const Programs = () => {
    return (
        <section className='programs'>
            <div className='container programs_container' id='programs'>
                <SectionHead icon={<GiGraduateCap />} title="Our team curates a curriculum that helps students learn the most in-demand skills in web development so they  can get a great job, no matter where they  live." />

                {/* <div className='programs__wrapper'>
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
                </div> */}
            </div>


            <Accordion title="Technical Skills" content={[
                'HTML & CSS',
                'Ruby',
                'Databases',
                'Ruby on Rails',
                'JavaScript',
                'React & Redux',
                'Algorithms',
                'Data Structures'
            ]} />
            <Accordion title="Soft Skills" content={[
                'Effective Networking',                
                'Time Management',
                'Cross-cultural Communication',
                'Remote Work Best Practices',
                'How to Prepare for Interviews',
                'Effective Job Searching',          
            ]} />

            <div class="orig_logos">
                <img src={stack}></img>
            </div>

        </section>
    )
}

export default Programs
