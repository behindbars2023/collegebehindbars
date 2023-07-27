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
                <SectionHead icon={<GiGraduateCap />} title="During the full-time technical curriculum, student inmates 
                                spend 6 to 9 months learning the most in-demand skills in 
                                web development, developing their technical skills, 
                                building projects, from simple scripts to full web apps 
                                and deployed systems, improving the skills they need to 
                                excel in the global job market" />

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
