//jsx
const name = 'Zukile Mtoso';
const element = <h1>Hello, {name}</h1>
ReactDOM.render(
  element,
  document.getElementById('root')
);


function formatName(user){
    return user.firstName + '' + user.lastName;
  }
  
  const user = {
    firstName: 'Zukile',
    lastName: 'Mtotso'
  };
  
  const element = (
    //calling in the function and passing the param
  <h1>Hello, {formatName(user)}!</h1>);
  
  ReactDOM.render(element, document.getElementById('root'));


  //represing an object

const element =(
    <h1 className="greeting">Hello, world</h1>
                   )
    //const element2 = React.create
    ReactDOM.render(
      element, 
      document.getElementById('root'));


//represing an object
const element = React.createElement(
    'Hi',
    {className: 'greeting'}, 'Hello world')
    
    ReactDOM.render(
      element, 
      document.getElementById('root'));



//rendering element
const element = <h1>Hello world</h1>;
//rendering element from the dom 
//<div id="root"></div>
ReactDOM.render(//pass the elemt to the dom i.e element
  element, 
  document.getElementById('root'));



//creating object to display
const element = <h1>Hello South Africa</h1>;
//displaing on the dom
ReactDOM.render(element, document.getElementById('root'));



//updating the rendered element

function tick(){
    const element = (
    <div>
        <h1>Hello world</h1>
        <h2>It is {new Date().toLocaleTimeString()}.</h2>
      </div>);
    ReactDOM.render(element, document.getElementById('root'));
  }
  
  setInterval(tick, 1000);
  //It calls ReactDOM.render() every second from a setInterval() callback.


  //COMPONENTS AND PROPS
//split the UI

//are like js functions

//creating function
function Welcome(props){
    return <h1>Hello, {props.name}</h1>;
  }
  
  //using class
  
  class Welcome extends React.Component{
    render(){
      return <h1>Hello, {this.props.name}</h1>;
    }
  }



  //Rendering component
//function kinda but class
function Welcome(props){
    return <h1>Hello, {props.name}</h1>;
  }
  //object
  const element = <Welcome name = "Zukadoh!"/>;
  //
  //displaying to the dom
  ReactDOM.render(
  element, document.getElementById('root'));


    //resuing the component

function Welcome(props){
    return <h1>Hello, {props.name}</h1>;
    //name is yet to be created
    //props is arguments or property
  }
  
  function App(){
    return(
    <div>
        <Welcome name="Sara"/>
        <Welcome name="Zukile"/>
        <Welcome name="Odwa"/>
      </div>
    );
  }
   ReactDOM.render( <App />, document.getElementById('root'));     
   
   
   function formatDate(date) {
    return date.toLocaleDateString();
  }
  
  function Comment(props) {
    return (
      <div className="Comment">
        <div className="UserInfo">
          <img
            className="Avatar"
            src={props.author.avatarUrl}
            alt={props.author.name}
          />
          <div className="UserInfo-name">
            {props.author.name}
          </div>
        </div>
        <div className="Comment-text">{props.text}</div>
        <div className="Comment-date">
          {formatDate(props.date)}
        </div>
      </div>
    );
  }
  
  const comment = {
    date: new Date(),
    text: 'I hope you enjoy learning React!',
    author: {
      name: 'Hello Kitty',
      avatarUrl: 'https://placekitten.com/g/64/64',
    },
  };
  ReactDOM.render(
    <Comment
      date={comment.date}
      text={comment.text}
      author={comment.author}
    />,
    document.getElementById('root')
  );
  
//For example, consider this Comment component:

//nested components
  function formatDate(date) {
    return date.toLocaleDateString();
  }
  
  function Comment(props) {
    return (
      <div className="Comment">
        <div className="UserInfo">
          <img
            className="Avatar"
            src={props.author.avatarUrl}
            alt={props.author.name}
          />
          <div className="UserInfo-name">
            {props.author.name}
          </div>
        </div>
        <div className="Comment-text">{props.text}</div>
        <div className="Comment-date">
          {formatDate(props.date)}
        </div>
      </div>
    );
  }
  
  const comment = {
    date: new Date(),
    text: 'I hope you enjoy learning React!',
    author: {
      name: 'Hello Zukile',
      avatarUrl: 'https://placekitten.com/g/64/64',
    },
  };
  ReactDOM.render(
      //Comment functions works like a wrapper for all the objects
    <Comment
      date={comment.date}
      text={comment.text}
      author={comment.author}
    />,
    document.getElementById('root')
  );
  
  //extracting component into smaller components

//create avatar function
function Avatar(props){
    return (
    <img className="Avatar" 
      src={props.user.avatarUrl}
      alt={props.user.name}
      />
    );
  };
  
  // comment breakdown
  
  function Comment(props){
    return (
      <div className="Comment">
        <div className="UserInfo">
          <Avatar user={props.author}/>
          <div className="UserInfo-name">
            {props.author.name}
          </div>
        </div>
        <div className="Comment-text">
          {props.text}
        </div>
        <div className="Comment-date">
          {formatDate(props.date)}
        </div>
      </div>
    );
  }
  
  //extract info that renders UserInfo
  
  function UserInfo(props){
    return (
    <div className="UserInfo">
        <Avatar user={props.user}/>
        <div className="UserInfo-name">
          {props.user.name}
        </div>
      </div>
    );
  }
  
  //simplifying the comment further
  function Comment(props){
    return (
    <div className="Comment">
        <UserInfo user={props.author}/>
        <div className="Comment-text">
          {props.text}
        </div>
        <div className="Comment-date">
          {formatDate(props.date)}
        </div>
      </div>
    );
  }

  //working code
  function formatDate(date) {
    return date.toLocaleDateString();
  }
  
  function Avatar(props) {
    return (
      <img
        className="Avatar"
        src={props.user.avatarUrl}
        alt={props.user.name}
      />
    );
  }
  
  function UserInfo(props) {
    return (
      <div className="UserInfo">
        <Avatar user={props.user} />
        <div className="UserInfo-name">{props.user.name}</div>
      </div>
    );
  }
  
  function Comment(props) {
    return (
      <div className="Comment">
        <UserInfo user={props.author} />
        <div className="Comment-text">{props.text}</div>
        <div className="Comment-date">
          {formatDate(props.date)}
        </div>
      </div>
    );
  }
  
  const comment = {
    date: new Date(),
    text: 'I hope you enjoy learning React!',
    author: {
      name: 'Hello Kitty',
      avatarUrl: 'https://placekitten.com/g/64/64',
    },
  };
  ReactDOM.render(
    <Comment
      date={comment.date}
      text={comment.text}
      author={comment.author}
    />,
    document.getElementById('root')
  );

  
  //pure function
function sum(a,b){
    return a+b;
  }
  
  //impure function
  
  function withdraw(account, amount) {
    account.total -= amount;
  }
  //all components must act as pure functions

    
//state and lifecycle

function tick(){
    const element = (
    <div>
        <h1>Hello world</h1>
        <h1>The time now is {new Date().toLocaleTimeString()}.</h1>
      </div>
    );
    ReactDOM.render(
    element,
    document.getElementById('root'));
  }
  
  setInterval(tick, 1000);

  //breaked even

  //encapsulating the clock
//creating clock as a function
function Clock(props){
    return (
      <div>
        <h1>
          Hello, World.
        </h1>
        <h2>
          The time is exactly {props.date.toLocaleTimeString()}.
        </h2>
      </div>
    );
  }
  
  //creating tick as function
  
  function tick(){
    ReactDOM.render(
      //passing in the function flcokc to display or be rendered on the dom
    <Clock date={new Date()}/>,
      document.getElementById('root')
    );
  }
  //set timer
  setInterval(tick, 1000);



  //Ideally we want to write this once and have the Clock update itself:

//converting a function to a class

//1. create class with same name, that extends React.Component
//2. Add a single empty method to it called render()
//3. move the body of the function into the render() mmethod
//4. replace props with this.props in the render() body
//5. delete the remaining empty function declaration

class Clock extends React.Component {
    render() {
      return (
        <div>
          <h1>Hello, world!</h1>
          <h2>It is {this.props.date.toLocaleTimeString()}.</h2>
        </div>
      );
    }
  }
  //creating the 
  function tick() {
    ReactDOM.render(
      <Clock date={new Date()} />,
      document.getElementById('root')
    );
  }
  
  setInterval(tick, 1000);


  //adding local state to a class
//move date from the pross to the three steps
//1.  replace this.props.date with this.state.date in the render() method

class Clock extends React.Component{
    render(){
      return(
      <div>
        <h1>Hello world</h1>
          
        <h3>The time is {this.state.date.toLocaleTimeString()}.</h3>
      </div>
        );
    }
  }
  
  //2. add a class constructor that assings the initial this.state
  class Clock extends React.Component {
    constructor(props){
      super(props);
      this.state = {date: new Date()};
    }
    
    render(){
      return (
        <div>
          <h1>Hello world</h1>
          <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
        </div>
      );
    }
  }
  
  //note how to pass props to the base constructor
  constructor(props){
    super(props);
    this.state = {date: new Date()};
  }
  
  //class componets should always call the base constructor with props
  
  //3. remove the date prop from the <Clock /> element
  
  ReactDOM.render(
    <Clock />,
    document.getElementById('root')
  );
  
  // total modified component
  
  class Clock extends React.Component{
    constructor(props){
      super(props);
      this.state = {date: new Date()};
    }
    render(){
      <div>
        <h1>Hello world</h1>
        <h2>It is {this.state.date.toLocaleTimeString()}</h2>
      </div>
    }
  }

  // full code snippet

  class Clock extends React.Component {
    constructor(props) {
      super(props);
      this.state = {date: new Date()};
    }
  
    render() {
      return (
        <div>
          <h1>Hello, World!</h1>
          <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
        </div>
      );
    }
  }
  
  ReactDOM.render(
    <Clock />,
    document.getElementById('root')
  );
  

  //full snippet

class Clock extends React.Component{
    constructor(props){
      super(props);
        this.state = {date: new Date()};
      }
      render(){
        return(
          <div>
            <h1>hELLO world</h1>
            <p>It is exactly {this.state.date.toLocaleTimeString()}.</p>
          </div>
        );
      }
    }
    
    ReactDOM.render(
      <Clock />,
      document.getElementById('root')
    );
  

    //adding a lifecycle

//we want to setup a timer whener the clock is rendered to the DOM for the first time
// this is called 'mounting'
// rending dom fot the first is called mounting

// we want to clear the timer whenever the dom produced by the clock is removed

//this is called 'unmount'

// we can declare special methods on the component class to run some code when a component mounts and unmounts.

class Clock extends React.Component {
    constructor(props) {
      super(props);
      this.state = {date: new Date()};
    }
  
    componentDidMount() {
      this.timerID = setInterval(
        () => this.tick(),
        1000
      );
    }
  
    componentWillUnmount() {
      clearInterval(this.timerID);
    }
  
    tick() {
      this.setState({
        date: new Date()
      });
    }
  
    render() {
      return (
        <div>
          <h1>Hello, world!</h1>
          <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
        </div>
      );
    }
  }
  
  ReactDOM.render(
    <Clock />,
    document.getElementById('root')
  );
  
  
  //these method are called lifecycle methods
  //the componentDidMount() method runs after the compponent output has been rendered to the DOM
  // this is a good place to setup a timer
  
  //full code for lifecycle events

class Clock extends React.Component {
    constructor(props){
      super(props);
      this.state = {date: new Date()};
    }
    //render brwsr first
    componentDidMount() {
      this.timerID = setInterval(
        () => this.tick(),
        1000
      );
    }
    //done rendering and unset timer
   componentWillUnmount() {
      clearInterval(this.timerID);
    }
    
    //create tick function
  tick() {
      this.setState({
        date: new Date()
      });
    }
  render(){
    return (
      <div>
        <h1>Hello world</h1>
        <h2>It is {this.state.date.toLocaleTimeString()}</h2>
      </div>
    );
  }
  }
  
  ReactDOM.render(
    <Clock/>, 
   document.getElementById('root')
  );


  //full code for lifecycle events

class Clock extends React.Component {
    constructor(props){
      super(props);
      this.state = {date: new Date()};
    }
    //render brwsr first
    componentDidMount() {
      this.timerID = setInterval(
        () => this.tick(),
        1000
      );
    }
    //done rendering and unset timer
   componentWillUnmount() {
      clearInterval(this.timerID);
    }
    
    //create tick function
  tick() {
      this.setState({
        date: new Date()
      });
    }
  render(){
    return (
      <div>
        <h1>Hello world</h1>
        <h2>It is {this.state.date.toLocaleTimeString()}</h2>
      </div>
    );
  }
  }
  
  ReactDOM.render(
    <Clock/>, 
   document.getElementById('root')
  );


  //Using State Correctly

//three things you should know

//1.  do not modify state directory

//example
this.state.comment = 'hello'//wrong

//instead, use setState()

this.setState({comment: 'Hello'});

//the only place to assign this.state is the constructor

//State Updates May be Asysnchronous


// correct
this.setState((state, props) => ({
  counter: state.counter + props.increment
}));
//can also use regular function

this.setState(function(state, props){
  return{
    counter: state.counter + props.increment
  };
});


//state updated are merged
//setstate()

constructor(props){
  super(props);
  this.state = {
    posts: [],
    comments: []
  };
}

//update the state separately with  setState()

componentDidMount(){
  fetchPosts().then(response => {
    this.setState({
      posts: response.posts
    });
  });
  
  fetchComments().then(response => {
    this.setState({
      comments: response.comments
    });
  });
}

//Using State Correctly

//three things you should know

//1.  do not modify state directory

//example
this.state.comment = 'hello'//wrong

//instead, use setState()

this.setState({comment: 'Hello'});

//the only place to assign this.state is the constructor

//State Updates May be Asysnchronous


// correct
this.setState((state, props) => ({
  counter: state.counter + props.increment
}));
//can also use regular function

this.setState(function(state, props){
  return{
    counter: state.counter + props.increment
  };
});


//state updated are merged
//setstate()

constructor(props){
  super(props);
  this.state = {
    posts: [],
    comments: []
  };
}

//update the state separately with  setState()

componentDidMount(){
  fetchPosts().then(response => {
    this.setState({
      posts: response.posts
    });
  });
  
  fetchComments().then(response => {
    this.setState({
      comments: response.comments
    });
  });
}

//

//lifectcle and state
function FormattedDate(props) {
    return <h2>It is {props.date.toLocaleTimeString()}.</h2>;
  }
  
  class Clock extends React.Component {
    constructor(props) {
      super(props);
      this.state = {date: new Date()};
    }
  
    componentDidMount() {
      this.timerID = setInterval(
        () => this.tick(),
        1000
      );
    }
  
    componentWillUnmount() {
      clearInterval(this.timerID);
    }
  
    tick() {
      this.setState({
        date: new Date()
      });
    }
  
    render() {
      return (
        <div>
          <h1>Hello, world!</h1>
          <FormattedDate date={this.state.date} />
        </div>
      );
    }
  }
  
  ReactDOM.render(
    <Clock />,
    document.getElementById('root')
  );
  


  //calling top dwon
//undirectional data flow
function FormattedDate(props){
    return <p>It is {props.date.toLocaleTimeString()}.</p>;
  }
  
  class Clock extends React.Component{
    constructor(props){
      super(props);
      this.state = {date: new Date()};
    }
    
    componentDidMount(){
      this.timerID = setInterval(
      ()=> this.tick(),
      1000
      );
    }
    componentWillUnmount(){
      clearInterval(this.timerID);
    }
    
    tick(){
      this.setState({
        date: new Date()
      });
    }
    
    render(){
      return (
        <div>
          <h1>Hello world.</h1>
          <FormattedDate date={this.state.date}/>
        </div>
      )
    }
  }
  
  function App(){
    return(
      <div>
        <Clock/>
         <Clock/>
         <Clock/>
      </div>
    )
  }
  
  ReactDOM.render(<App />, document.getElementById('root'));

  //toggle button on and off

  class Toggle extends React.Component {
    constructor(props) {
      super(props);
      this.state = {isToggleOn: true};
  
      // This binding is necessary to make `this` work in the callback
      this.handleClick = this.handleClick.bind(this);
    }
  
    handleClick() {
      this.setState(prevState => ({
        isToggleOn: !prevState.isToggleOn
      }));
    }
  
    render() {
      return (
        <button onClick={this.handleClick}>
          {this.state.isToggleOn ? 'ON' : 'OFF'}
        </button>
      );
    }
  }
  
  ReactDOM.render(
    <Toggle />,
    document.getElementById('root')
  );


// passing argunt to an event listener

//<button onClick={(e) => this.deleteRow(id, e)}> Delete</button>
<button onClick={(e) => this.deleteRow(id, e)}>Delete Row</button>

//<button onClick={this.deleteRow.bind(this, id)}> Delete</button>

<button onClick={this.deleteRow.bind(this, id)}>Delete Row</button>

// conditional rendering

//in react you create a distinct component that encapsulate the behaviour you need

// then you render only some of them depending on the state of your application

//use if else else if

function UserGreeting(props){
  return <h1>Welcome back.</h1>;
}

function GuestGreeting(props){
  return <h1>Please register.</h1>;
}

//greeting
function Greeting(props){
  const isLoggedIn = props.isLoggedIn;
  if (isLoggedIn){
    return <UserGreeting />;
  }
  return <GuestGreeting />;
}

ReactDOM.render(
  //try changing to isloggedin ={true}
  <Greeting isLoggedIn={false} />,
  //<Greeting isLoggedIn={true}/>,
  document.getElementById('root')
);

//login and logout working example
class LoginControl extends React.Component {
  constructor(props) {
    super(props);
    this.handleLoginClick = this.handleLoginClick.bind(this);
    this.handleLogoutClick = this.handleLogoutClick.bind(this);
    this.state = {isLoggedIn: false};
  }

  handleLoginClick() {
    this.setState({isLoggedIn: true});
  }

  handleLogoutClick() {
    this.setState({isLoggedIn: false});
  }

  render() {
    const isLoggedIn = this.state.isLoggedIn;
    let button;

    if (isLoggedIn) {
      button = <LogoutButton onClick={this.handleLogoutClick} />;
    } else {
      button = <LoginButton onClick={this.handleLoginClick} />;
    }

    return (
      <div>
        <Greeting isLoggedIn={isLoggedIn} />
        {button}
      </div>
    );
  }
}

function UserGreeting(props) {
  return <h1>Welcome back!</h1>;
}

function GuestGreeting(props) {
  return <h1>Please sign up.</h1>;
}

function Greeting(props) {
  const isLoggedIn = props.isLoggedIn;
  if (isLoggedIn) {
    return <UserGreeting />;
  }
  return <GuestGreeting />;
}

function LoginButton(props) {
  return (
    <button onClick={props.onClick}>
      Login
    </button>
  );
}

function LogoutButton(props) {
  return (
    <button onClick={props.onClick}>
      Logout
    </button>
  );
}

ReactDOM.render(
  <LoginControl />,
  document.getElementById('root')
);


//shorter syntax for an if and && statement
//simulatin inbox

function Mailbox(props){
  const unreadMessages = props.unreadMessages;
  return (
    <div>
      <h1>Hello</h1>
      {unreadMessages.length > 0 && 
        <h2>
          You have {unreadMessages.length} unread messages.
        </h2>
      }
    </div>
  );
}

const messages = ['React', 'Re: React', 'Re:Re:React'];

ReactDOM.render(
  <Mailbox unreadMessages={messages} />,
  document.getElementById('root')
);


//inline if else with conditonal operator

render(){
  const isLoggedIn = this.state.isLoggedIn;
  return(
    <div>
      The user is <b>{isLoggedIn ? 'currently' : 'not'}</b> logged in .
    </div>
  );
}

//in larger expression

render(){
  const isLoggedIn = this.state.isLoggedIn;
  return(
    <div>
      {isLoggedIn ? (
        <LogoutButton onClick={this.handleLogoutClick} />
      ) : (
        <LoginButton onClick={this.handleLoginClick}/>
      )}
    </div>
  );
}
/*remember that whenever conditions become too complex, it might be a good time to extract a component.

*/

//warinig  like burner ads to simulate the ads words method

function WarningBanner(props) {
  if (!props.warn) {
    return null;
  }

  return (
    <div className="warning">
      Warning!
    </div>
  );
}

class Page extends React.Component {
  constructor(props) {
    super(props);
    this.state = {showWarning: true}
    this.handleToggleClick = this.handleToggleClick.bind(this);
  }

  handleToggleClick() {
    this.setState(prevState => ({
      showWarning: !prevState.showWarning
    }));
  }
  
  render() {
    return (
      <div>
        <WarningBanner warn={this.state.showWarning} />
        <button onClick={this.handleToggleClick}>
          {this.state.showWarning ? 'Hide' : 'Show'}
        </button>
      </div>
    );
  }
}

ReactDOM.render(
  <Page />,
  document.getElementById('root')
);