import './App.css';
import './StudentsPage/css/basicstyle.css'
import Img from "./LoginPageCompo/img"
import Form from "./LoginPageCompo/form"
import Header from "./StudentsPage/header"
import Footer from "./StudentsPage/footer"
import StudentStuff from "./StudentsPage/studentStuff"
import TeacherStuff from "./TeacherPage/teacherstuff"

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
  let teacherPager = (
      <div>
        <Header />
        <TeacherStuff />
        <Footer />
      </div>
  )
  return studentsPage;
}

export default App;
