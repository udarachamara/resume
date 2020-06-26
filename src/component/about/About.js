import React, {Component} from 'react';


class About extends Component {

    state = {}

    render() {
        return (
            <div>
                <section className="resume-section" id="about">
                    <div className="resume-section-content">
                        <h1 className="mb-0 lato">
                            Udara
                            <span className="text-primary lato">Chamara</span>
                        </h1>
                        <div className="subheading subheading-1 mb-5">
                            "Chamara" Ihalagama, Koonweva, Maho . &nbsp;

                            076-417-5580 . &nbsp;

                            <a href="mailto:udara.cherath@gmail.com">udara.cherath@gmail.com</a>
                        </div>
                        <p className="lead mb-5">I am experienced in leveraging agile frameworks to provide a robust
                            synopsis for high level overviews. Iterative approaches to corporate strategy foster
                            collaborative thinking to further the overall value proposition.</p>
                        <div className="social-icons">
                            <a className="social-icon" href="#"><i className="fa fa-linkedin"></i></a>
                            <a className="social-icon" href="#"><i className="fa fa-github"></i></a>
                            <a className="social-icon" href="#"><i className="fa fa-twitter"></i></a>
                            <a className="social-icon" href="#"><i className="fa fa-facebook-f"></i></a>
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}

export default About;