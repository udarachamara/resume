import React, {Component} from 'react';


class Skills extends Component {

    state = {}

    render() {
        return (
            <div>
                <section className="resume-section" id="skills">
                    <div className="resume-section-content">
                        <h2 className="mb-5 lato">Skills</h2>
                        <div className="subheading mb-3">Programming Languages & Tools</div>
                        <ul className="list-inline dev-icons">
                            <li className="list-inline-item"><i className="fa fa-html5"></i></li>
                            <li className="list-inline-item"><i className="fa fa-css3-alt"></i></li>
                            <li className="list-inline-item"><i className="fa fa-js-square"></i></li>
                            <li className="list-inline-item"><i className="fa fa-angular"></i></li>
                            <li className="list-inline-item"><i className="fa fa-react"></i></li>
                            <li className="list-inline-item"><i className="fa fa-node-js"></i></li>
                            <li className="list-inline-item"><i className="fa fa-sass"></i></li>
                            <li className="list-inline-item"><i className="fa fa-less"></i></li>
                            <li className="list-inline-item"><i className="fa fa-wordpress"></i></li>
                            <li className="list-inline-item"><i className="fa fa-gulp"></i></li>
                            <li className="list-inline-item"><i className="fa fa-grunt"></i></li>
                            <li className="list-inline-item"><i className="fa fa-npm"></i></li>
                        </ul>
                        <div className="subheading mb-3">Workflow</div>
                        <ul className="fa-ul mb-0">
                            <li>
                                <span className="fa-li"><i className="fa fa-check"></i></span>
                                Mobile-First, Responsive Design
                            </li>
                            <li>
                                <span className="fa-li"><i className="fa fa-check"></i></span>
                                Cross Browser Testing & Debugging
                            </li>
                            <li>
                                <span className="fa-li"><i className="fa fa-check"></i></span>
                                Cross Functional Teams
                            </li>
                            <li>
                                <span className="fa-li"><i className="fa fa-check"></i></span>
                                Agile Development & Scrum
                            </li>
                        </ul>
                    </div>
                </section>
            </div>
        );
    }
}

export default Skills;