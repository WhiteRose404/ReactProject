import './App.css';
import './StudentsPage/css/basicstyle.css'
import Img from "./LoginPageCompo/img"
import Form from "./LoginPageCompo/form"
import Header from "./StudentsPage/header"
import Footer from "./StudentsPage/footer"
import StudentStuff from "./StudentsPage/studentStuff"

function App() {
  let loginPage = (
      <div className="Container">
            <Img />
            <Form />
      </div>
  );
  let studentsPage = (
      <div>
        <Header />
        <StudentStuff id="1"/>
        <Footer />
      </div>
  )
  return studentsPage;
}

export default App;
