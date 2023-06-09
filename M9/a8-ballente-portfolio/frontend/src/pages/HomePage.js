import React from 'react';

function HomePage() {
    return (
        <>
        <h2>Eusebius's MERN Project</h2>
        <article>
            <h3>About the project</h3>

            <dl>
            <h4>Technologies Explored In This Course</h4>
                        <dt>
                            <strong>MongoDB</strong>
                            <dd>
                                MongoDB is a document-oriented, NOSQL database program.
                            </dd>
                        </dt>
                        <dt>
                            <strong>Express</strong>
                            <dd>
                                Express is a Node.js based web application framework.
                            </dd>
                        </dt>
                        <dt>
                            <strong>React</strong>
                            <dd>
                                React is a component-based Javascript library for building user interfaces.
                            </dd>
                        </dt>
                        <dt>
                            <strong>Node.js</strong>
                            <dd>
                                Mode.js is a Javascript runtime and server environment, as well as a framework for building backend and frontend applications.
                            </dd>
                        </dt>
                        <dt>
                            <strong>Mongoose</strong>
                            <dd>
                                Mongoose is an NPM Javascript module for integrating a Node.js application with a MongoDB database.
                            </dd>
                        </dt>
                        <dt>
                            <strong>NPM</strong>
                            <dd>
                                NPM is a package manager for Node.js and facilitates the installation and management of Javascript packages for building applications.
                            </dd>
                        </dt>
            </dl>
        </article>

        <a href="https://github.com/skyballengine">Eusebius's Github Page</a>
        {/* <img src="https://avatars.githubusercontent.com/u/96203286?s=400&u=5a9beb0427b367fb33092a0771bce66f7e8ea268&v=4" alt="my family" /> */}

        </>
    )
}

export default HomePage;