import React, { ReactElement } from 'react';

interface NewsContentType {
    [key: string]: ReactElement;
}

export const newsContent: NewsContentType = {
    open: (
        <div>
        <h3>
    Duration
</h3>
<div>
    3.5 Years (full-time (on-campus)) <br/>
    3.5 Years (full-time (online)) <br/>
    4.5 Years (part-time (session-based)) <br/>
</div>
<h3>
    National Code of the Study Program
</h3>
<div>
    6121BX037
</div>
<h2>
    About the program
</h2>
<div>
    <h3>
        Learning Formats
    </h3>
    <p>
        The full-time program (with a course load of 30 credits per semester) is
        offered in two formats – on–campus and online. With on-campus learning,
        students live and study in Vilnius, attending classes both offline and
        online. The online format involves distance learning from Monday to
        Friday during the day, with two to three offline sessions of up to five
        days throughout the academic year. For online learning, students can be
        located in any country but must attend the on-campus sessions held on
        location in Vilnius.
    </p>
    <p>
        The part-time program is a less intensive form of learning (21–24
        credits per semester) with regular online classes during non-working
        hours and mandatory offline sessions two to three times a year. Students
        can work or study simultaneously.
    </p>
    <h3>
        Education
    </h3>
    <p>
        The educational program is designed in collaboration with the practicing
        specialists from EPAM and is based on modern industry requirements.
    </p>
    <p>
        Beginning with the first semester, students can choose one of three
        specializations – Java EE, .Net, or JavaScript/TypeScript. One of these
        technologies is studied intensively for four semesters.
    </p>
    <p>
        All students study the Python programming language as part of the
        subjects “Algorithms and Data Structures,” “Theory of Probability, Math
        Statistics, and Data Analysis,” “Machine Learning,” and “Image
        Processing &amp; Computer Vision.”
    </p>
    <p>
        The program includes subjects that will help students acquire practical
        competencies and develop soft skills.
    </p>
    <p>
        Fundamental knowledge in the field of digital product development is
        complemented by subjects that cover the main trends in the development
        of the IT industry: “Cloud technologies,” “Machine Learning,” and
        “Cryptography &amp; Blockchain.”
    </p>
    <p>
        Instruction is in Russian, with a gradual transition to English in the
        senior year. During the first two semesters, students take an intensive
        English language course, and English-language educational materials are
        widely used throughout the program.
    </p>
    <h3>
        Note
    </h3>
    <p>
        The program is accredited by the Lithuanian Centre for Quality
        Assessment in Higher Education (SKVC), fully complies with official
        procedures, standardized in the credits of the Bologna system, and
        provides the opportunity to continue studying in master’s programs of
        universities in Europe and the USA in Computer Sciences. Graduates
        receive a diploma from EHU with a degree of Bachelor of Computer
        Science.
    </p>
</div>
        </div>
      ),
  hackathon: (
    <div>
      <p>Are you ready to unleash your creativity and technical prowess? Our upcoming hackathon promises an exhilarating experience for all tech enthusiasts.</p>
      <p>Whether you're a seasoned developer, a creative designer, or an aspiring innovator, this event offers a unique platform to collaborate and transform your ideas into reality.</p>
      <h3>What to expect:</h3>
      <ul>
        <li>Dive into cutting-edge technologies</li>
        <li>Work on real-world challenges</li>
        <li>Network with industry professionals</li>
        <li>Compete for coveted prizes</li>
      </ul>
      <p>The hackathon is not just about competition; it's a celebration of innovation and a chance to be part of a dynamic community dedicated to pushing boundaries and making a positive impact.</p>
    </div>
  ),
  newSemester: (
    <div>
      <h3>Hello everyone,</h3>
      <p>As we embark on a new semester, I want to extend my warmest congratulations to all the students at our esteemed IT university.</p>
      <p>This is a time for fresh beginnings, new challenges, and exciting opportunities. May this semester be filled with discovery, growth, and success as we delve into the ever-evolving world of technology.</p>
      <p>Let's embrace the chance to expand our knowledge, collaborate with peers, and push the boundaries of what we can achieve.</p>
      <p>Together, let's make this semester a rewarding journey of learning and innovation.</p>
      <p>Wishing you all the best for the new semester ahead!</p>
      <p>Warm regards</p>
    </div>
  ),
  studentLab: (
    <div>
      <p>The students laboratory at the university introduced new equipment for research in various fields of science.</p>
      <h3>Key Points:</h3>
      <ul>
        <li>Advanced tools for enhanced academic experience</li>
        <li>Significant contribution to research quality</li>
        <li>Workshops and training sessions planned</li>
        <li>Opportunities for innovative projects</li>
      </ul>
      <p>The laboratory management encourages students to propose innovative projects that can benefit from the newly available technologies.</p>
    </div>
  ),
  secretSanta: (
    <div>
      <h3>Holiday Spirit at University!</h3>
      <p>Students at XYZ University are gearing up for an exciting event as they prepare for a secret Santa gift exchange.</p>
      <p>The university has organized this festive tradition to bring a sense of joy and camaraderie among the students during the holiday season.</p>
      <p>Participants are eagerly looking forward to randomly selecting their secret gift recipients and surprising them with carefully chosen presents.</p>
      <p>The event is set to take place next week, and it promises to be a delightful and heartwarming experience for all involved.</p>
    </div>
  )
};