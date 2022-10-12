import React from "react";
import { Card, Container, Row, Col } from "react-bootstrap";
import react_router from "../../images/react_router.jpg";
import context_api from "../../images/context_api.png";
import useref from "../../images/useref.jpg";

const Blog = () => {
    return (
        <section className="blogs" style={{ marginTop: 50, marginBottom: 50 }}>
            <Container>
                <h2 style={{ color: "#405073", marginBottom: 40 }}>Blogs</h2>

                <Card className="mb-5">
                    <Row>
                        <Col lg={2} md>
                            <Card.Img fluid={true} src={react_router} />
                        </Col>
                        <Col lg={10} md>
                            <Card.Body>
                                <Card.Title
                                    style={{
                                        color: "#405073",
                                        marginBottom: 20,
                                    }}
                                >
                                    What is the Purpose of using react router?
                                </Card.Title>
                                <Card.Text>
                                    React Router is a standard library for
                                    routing in React. It enables the navigation
                                    among views of various components in a React
                                    Application, allows changing the browser
                                    URL, and keeps the UI in sync with the URL.
                                </Card.Text>
                            </Card.Body>
                        </Col>
                    </Row>
                </Card>

                <Card className="mb-5">
                    <Row>
                        <Col lg={2} md>
                            <Card.Img fluid={true} src={context_api} />
                        </Col>
                        <Col lg={10} md>
                            <Card.Body>
                                <Card.Title
                                    style={{
                                        color: "#405073",
                                        marginBottom: 20,
                                    }}
                                >
                                    How does context API works?
                                </Card.Title>
                                <Card.Text>
                                    The React Context API is a way for a React
                                    app to effectively produce global variables
                                    that can be passed around. This is the
                                    alternative to "prop drilling" or moving
                                    props from grandparent to child to parent,
                                    and so on. Context is also touted as an
                                    easier, lighter approach to state management
                                    using Redux. <br />
                                    React.createContext is all you need. It
                                    returns a consumer and a provider. Provider
                                    is a component that as it's names suggests
                                    provides the state to its children. It will
                                    hold the "store" and be the parent of all
                                    the components that might need that store.
                                    Consumer as it so happens is a component
                                    that consumes and uses the state.
                                </Card.Text>
                            </Card.Body>
                        </Col>
                    </Row>
                </Card>

                <Card className="mb-5">
                    <Row>
                        <Col lg={2} md>
                            <Card.Img fluid={true} src={useref} />
                        </Col>
                        <Col lg={10} md>
                            <Card.Body>
                                <Card.Title
                                    style={{
                                        color: "#405073",
                                        marginBottom: 20,
                                    }}
                                >
                                    What is useRef?
                                </Card.Title>
                                <Card.Text>
                                    The useRef is a hook that allows to directly
                                    create a reference to the DOM element in the
                                    functional component. The useRef returns a
                                    mutable ref object. This object has a
                                    property called .current. The value is
                                    persisted in the refContainer.current
                                    property. These values are accessed from the
                                    current property of the returned object. The
                                    .current property could be initialised to
                                    the passed argument initialValue e.g.
                                    useRef(initialValue). The object can persist
                                    a value for a full lifetime of the
                                    component.
                                </Card.Text>
                            </Card.Body>
                        </Col>
                    </Row>
                </Card>
            </Container>
        </section>
    );
};

export default Blog;
