import logo from './logo.svg';
import './App.css';
import Carousel from './components/Carousel';

function App() {
  return (
    <div>
      <p1>Carousel</p1>
      <div>
        <Carousel>
          <button name='button component' type='button'>OK</button>

          <img name='image component' src={logo} alt='ReactJS' />

          <form name='form component' action='call-service' method='post'>
            <input type='text' placeholder='enter the username' /><br />
            <input type='password' placeholder='enter the password' /><br />
            <input type='submit' value='Login' />
          </form>

          <table name='table component'>
            <thead>
              <tr>
                <th colspan='2'>The table header</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>The table body</td>
                <td>with two columns</td>
              </tr>
            </tbody>
          </table>

          <textarea name='text area component' rows='5' cols='33' placeholder='Type in this area' /> 

        </Carousel>
      </div>
    </div>
  );
}

export default App;
