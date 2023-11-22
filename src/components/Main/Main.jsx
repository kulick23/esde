import React from 'react';
import s from './Main.module.css'
import banner from '../image/Banner.png'

const Main = (props) => {
    return (
        <div>
            <div className={s.main}>
                <div className={s.mainseco}>
                    <div>
                        <h2>Academic degree</h2>
                        <p>Bachelor of Computer Science</p>
                        <h2>Duration</h2>
                        <p>3.5 Years (full-time (on-campus))</p>
                        <p>3.5 Years (full-time (online))</p>
                        <p>4.5 Years (part-time (session-based))</p>

                        <h2>National Code of the Study Program</h2>
                        <p>6121BX037</p>
                    </div>
                    <img className={s.mainseco__img} src={banner} />
                </div>
                <div><h2>Program Formats</h2>
                    <p><strong>The full-time program</strong> (with a course load of 30 credits per semester) <strong>is offered in two formats – on–campus and online.</strong> With on-campus learning, students live and study in Vilnius, attending classes both offline and online. The online format involves distance learning from Monday to Friday during the day, with two to three offline sessions of up to five days throughout the academic year. For online learning, students can be located in any country but must attend the on-campus sessions held on location in Vilnius.</p>
                    <p><strong>The part-time program</strong> is a less intensive form of learning (21–24 credits per semester) with regular online classes during non-working hours and mandatory offline sessions two to three times a year. Students can work or study simultaneously.</p>

                    <h2>Specialty Description</h2>
                    <p>EPAM School of Digital Engineering (ESDE) is an experimental division of EPAM in which bachelor’s and master’s degree programs are offered in partnership with traditional universities or new types of educational institutions. Similar projects are already operating in Ukraine, Poland, Uzbekistan, and other countries. ESDE opened in Lithuania in partnership with the European Humanities University in 2022.</p>
                    <h2>Education</h2>
                    <p>The educational program is designed by practicing specialists from EPAM and is based on modern industry requirements. Beginning with the first semester, students can choose one of three specializations – Java EE, .Net, or JavaScript/TypeScript. One of these technologies is studied intensively for four semesters. All students study the Python programming language as part of the subjects “Algorithms and Data Structures,” “Theory of Probability, Math Statistics, and Data Analysis,” “Machine Learning,” and “Image Processing & Computer Vision.” The program includes subjects that will help students acquire practical competencies and develop soft skills. Fundamental knowledge in the field of digital product development is complemented by subjects that cover the main trends in the development of the IT industry: “Cloud technologies,” “Machine Learning,” and “Cryptography & Blockchain.” Instruction is in Russian, with a gradual transition to English in the senior year. During the first two semesters, students take an intensive English language course, and English-language educational materials are widely used throughout the program.</p>


                    <h2>Campus Address</h2>
                    <p>Savanorių pr. 28, 03116 Vilnius</p>
                </div>
            </div>

        </div>
    )
}

export default Main;
