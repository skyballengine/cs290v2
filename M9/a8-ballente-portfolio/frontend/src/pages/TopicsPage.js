import React from 'react';

function TopicsPage() {
    return (
            <>
                <h2>
                    Web Development Concepts
                </h2>
                <nav /*style="padding-top: 8%;"*/ class="local-navigation">
                <a href="#article1">Web Servers</a>
                <a href="#article2">Frontend Design</a>
                <a href="#article3">Javascript</a>
                <a href="#article4">DOM Changes</a>
                </nav>
                <article id="article1">
                    <h3>Web Servers</h3>
                    <p>
                        Within the language of websites and servers, <strong></strong>
                        is the
                        default name of the home page of the website for Apache
                        web
                        servers.
                        Other platforms may have other default names, such as
                        <strong> default.html.</strong>
                    </p>
                    <p>
                        When inspecting the file run from the OSU ENGR file
                        system, the
                        network tab in the developer tools shows that an
                        <strong>HTTP
                            request</strong>
                        was made and an <strong>HTTP response</strong> was
                        received.
                        However, when the file was run from the local machine,
                        there was
                        no HTTP request. This is due to the fact that the HTTP
                        protocol
                        is not used when using files from a local machine.
                        We can observe the <strong>HTTP status code</strong>, as
                        well as the <strong>HTTP
                            request
                            header</strong> and <strong>response header</strong>,
                        each having a body that
                        shows useful
                        information about the request/response.
                    </p>
                    <p>
                        The <strong>favicon.ico</strong> file shows a 200 status
                        because it was
                        found due
                        to the fact that we are using OSU's server, and it
                        provides the
                        favicon file needed.
                        However, <strong>main.css</strong> and <strong>main.js</strong>
                        are not found and throw a
                        <strong>404
                            status code</strong> because they don't exist yet
                        within the
                        a1-ballente
                        directory. This is considered a client error because the
                        browser
                        cannot find those resources.
                    </p>
                    <p>
                        The <strong>URL</strong> is:
                        https://web.engr.oregonstate.edu/~ballente/a1-ballente/
                        The <strong>scheme</strong> is https.
                        The <strong>subdomain</strong> is web.engr.
                        The <strong>host domain</strong> is oregonstate.edu.
                        The <strong>resources</strong> are
                        /~ballente/a1-ballente/.
                    </p>
                </article>
                <article id="article2">
                    <h3>
                        Frontend Design
                    </h3>
                    <p>
                        Frontend design is the process of creating an effective
                        all-around experience for the user. It encompasses the
                        visual design, the graphical user interface (GUI) and
                        the interactive experience of the user.
                        The visual design includes consistent schemes for each
                        component of the site, as well as a functional
                        navigation system that is simple and intuitive to the
                        user.
                    </p>

                    <dl>
                        <h4>The five E's of usability</h4>
                        <dt>
                            <strong>Effective</strong>
                            <dd>
                                The site must be effective for the user; it
                                helps them achieve their goals.
                            </dd>
                        </dt>
                        <dt>
                            <strong>Efficient</strong>
                            <dd>
                                The site must be efficient, in that the user can
                                get results in as few steps as possible.
                            </dd>
                        </dt>
                        <dt>
                            <strong>Easy to Navigate</strong>
                            <dd>
                                The site must be easily navigable, even for
                                first time users. The required steps to get
                                results should be memorable and repeatable.
                            </dd>
                        </dt>
                        <dt>
                            <strong>Error-Free</strong>
                            <dd>
                                Free of common errors that might hinder a user's
                                ability to access the site's resources.
                            </dd>
                        </dt>
                        <dt>
                            <strong>Enjoyable</strong>
                            <dd>
                                Using the site is an overall enjoyable
                                experience for the intended audience, from the
                                standpoints of content and design.
                            </dd>
                        </dt>
                    </dl>
                    <p>
                        <strong>Page layout tags</strong> create blocks of
                        content within the
                        page that are displayed with a newline before and after
                        each element.
                        The appearance of each element depends on the CSS
                        styling applied to them.
                        These elements are also used by search engine robots and
                        screen readers to understand where certain content or
                        metadata resides within the page.

                    </p>
                    <p>
                        <strong>Anchor elements</strong> typically create links
                        from the current page
                        to external site pages. Whereas nav elements provide
                        page to page navigation within the site itselff.
                        The 'href' attribute holds the
                        value of the URL that is being linked to, this can be an
                        <strong>absolute URL</strong> or a <strong>relative URL</strong>
                        if the resource is
                        located within the same directory as the current page.
                    </p>
                </article>
                <article id="article3">
                    <h3>Javascript</h3>
                    <p>
                        Javascript is a general-purpose programming language.
                    </p>
                    <h4>
                        Data types
                    </h4>
                    <p>
                        Javascript has five primitive data types: strings,
                        numbers, booleans, undefined, and null.
                    </p>
                    <h4>
                        Javascript Objects
                    </h4>
                    <p>
                        Everything in Javascript besides the primitive data
                        types are objects.
                        Objects are key-value pairs that represent the
                        properties of the object.
                        Objects may also have methods that are actions that can
                        be performed on the objects.
                        Arrays are containers that hold data, in Javascript they
                        can hold any data type.
                        JSON (Javascript Object Notation) is a data-interchange
                        format, it uses the object format of a Javascript object
                        and is easily parsed by any programming language and is
                        used to send data across the web.
                    </p>
                    <h4>
                        Conditionals and Loops in Javascript
                    </h4>
                    <p>
                        Conditionals are branches in programs that represent
                        logical choices such as "if, then" statements, they are
                        used to control the flow of programs.
                        Loops are used to iterate through arrays and other data
                        structures, searching for values, performing
                        calculations, or other operations.
                    </p>
                    <h4>
                        Object Oriented Programming (OOP)
                    </h4>
                    <p>
                        Object Oriented Programming is a programming paradigm
                        that organizes software design around objects and their
                        properties instead of functions and logic.
                    </p>
                    <h4>
                        Functional Programming
                    </h4>
                    <p>
                        Functional Programming stands in contrast to Object
                        Oriented Programming, it uses exclusively functions and
                        logic for operations rather than objects and their
                        properties.
                    </p>
                </article>
                <article id="article4">
                    <h3>DOM Testing and Dynamic Updating</h3>
                    <p>
                        Developers can update the Document Object Model (DOM) by
                        using external Javascript files or by inserting inline
                        Javascript scripts. In these files or scripts,
                        developers can add or delete elements, as well as
                        modifying the contents of existing elements, just to
                        name a few options.
                    </p>
                    <p>
                        These changes can be executed based on events the user
                        takes and/or when the page is loaded.
                        Among other reasons, this is advantageous because
                        developers
                        can write code that shows results in log files that can
                        be helpful in testing an application using Express, for
                        example.
                    </p>
                </article>
            </>
    );
}

export default TopicsPage;