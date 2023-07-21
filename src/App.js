import './App.css';
import {Navbar,Container,Nav,NavDropdown,Row,Col,Image,Button,Card, } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import imageSrc from "./assets/hihi.jpg";
import imageTbr from "./assets/haha.jpg";
import imageSbr from "./assets/hoho.jpg";
import imageAjr from "./assets/hehe.jpg";
import imageAbg from "./assets/huhu.jpg";

function App() {
  return (
    <div className="App">
      <header>
      <Navbar expand="lg" className="bg-body-tertiary"  id="navbar"fixed="top">
      <Container>
        <Navbar.Brand>Welcome to Single page</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#gallery">Gallery</Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
   </header>
   <main>
    <Container id='home'>
      <Row className="px-4 my-5">
        <Col sm={7}>
         <Image 
           src={imageAbg}
           fluid 
           rounded
           className=""
          />
         </Col>
        <Col sm={5}>
          <h1 class="font-weight-light">Pengertian </h1>
          <p class="mt-4">
            Ini adalah sebuah gambar daduyang diambil dari google
          </p>
          <Button variant="outline-primary">Klik untuk mengetahui lebih lanjut</Button>
          </Col>
      </Row>
      <Row>
        <Card className="text-center bg-dark text-white my-5 py-4">
        <Card.Body>
          Ini adalah contoh gambar yang lainnya
        </Card.Body>
        </Card>
        </Row>
        <Row>
         <Col>
         <Card style={{ width: '18rem' }}  id="gallery">
          <Card.Img variant="top" src={imageAjr} />
           <Card.Body>
            <Card.Title>Penjelasan</Card.Title>
             <Card.Text>
             Gambar diatas adalah desain dari ROG
             </Card.Text>
            <Button variant="primary">Klik untuk melihat yang lainnya</Button>
           </Card.Body>
          </Card>
         </Col>
         <Col>
         <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src={imageSbr} />
           <Card.Body>
            <Card.Title>Penjelasan</Card.Title>
             <Card.Text>
               Gambar diatas ini merupakan dadu dengan sebuah rantai 
             </Card.Text>
            <Button variant="primary">Klik untuk melihat yang lainnya</Button>
           </Card.Body>
          </Card>
         </Col>
         <Col>
         <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src={imageTbr} />
           <Card.Body>
            <Card.Title>Penjelasan</Card.Title>
             <Card.Text>
               Gambar diatas adalah sebuah desain dari ROG
             </Card.Text>
            <Button variant="primary">Klik untuk melihat yang lainnya</Button>
           </Card.Body>
          </Card>
         </Col>
         <Col>
         <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src={imageSrc} />
           <Card.Body>
            <Card.Title>Penjelasan </Card.Title>
             <Card.Text>
              Gambar diatas adalah sebuah desain dari ROG
             </Card.Text>
            <Button variant="primary">Klik untuk melihat yang lainnya</Button>
           </Card.Body>
          </Card>
         </Col>
        </Row>
       </Container>
   </main>
   <footer class="py-5 my-5 bg-dark">
    <Container className="px-4">
      <p class="text-center text-white"> 
           Copyright &copy; by Muhamad Ilyas
      </p>
    </Container>
   </footer>
  </div>
  );
}

export default App;
