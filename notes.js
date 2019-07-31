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

//Accept list of numbers and using map to loop through

const numbers = [1, 2, 3, 4, 5];
const listItems = numbers.map((numbers) =>
  <li>{numbers}</li>
);

ReactDOM.render(
  <ul>{listItems}</ul>,
  document.getElementById('root')
)

//loop inside a component
function NumberList(props){
  const numbers = props.numbers;
  const listItems = numbers.map((number) => <li>{number}</li>
    );
    return (
   <li>{listItems}</li>);
  
}
const numbers = [1,2,3,4,5,6,7,8,9];
ReactDOM.render(
  <NumberList numbers={numbers}/>,
  document.getElementById('root')
);

//
//keys
//keys help recat identify which items have changed , are removed
// keys shoyld be given to the elements inside the array to give the element a stable identity

const numbers = [1,2,3,4,5,6,7,8,9, 0];
const listItems = numbers.map((number) => <li key=number.toString()>{number}</li>);
                              
//use  IDs to identify keys
const todoItems = todos.map((todo) => <li key={todo.id}>{todo.text}</li>);

//when you dont havea satble id use item index 


//keys
//correct usage of Key
function ListItem(props){
  //There is no need to specify a key
  return <li>{props.value}</li>;
}
//A good rule of thumb is that elements inside the map() call need keys.


function NumberList(props){
  const numbers = props.numbers;
  const listItems = numbers.map((number) =>//Keys should be specified inside the array
     <ListItem key={number.toString()} value={number} />);
  return (
  <ul>
    {listItems}
  </ul>
 );
}

const numbers = [1,2,3,4,5,6,7,8,9,0];
ReactDOM.render(
<NumberList numbers={numbers}/>,
document.getElementById('root'));


//blog posts simulation

//keys must only be uique among siblings

function Blog(props){
  const sidebar = (
  <ul>
      {props.posts.map((post) => <li key={post.id}> {post.title}</li>)}
    </ul>
  );
  const content = props.posts.map((post) =>
            <div key={post.id}>
              <h3>{post.title}</h3>
              <p>{post.content}</p>
            </div>
           );
             return (
            <div>{sidebar} <hr /> {content}</div>
           );
}

const posts = [
  {id:1, title: 'Hello sizwe', content: 'welcome to school!'},
  {id:2, title: 'install things', content: 'this is the better way to install ReactJS.'}
];

ReactDOM.render(
  <Blog posts={posts} />,
    document.getElementById('root')
);


//keys serves a hint to React but they dont get passed to your component
//if you need the same value in your compoent, pass it explicitly as a prop with a different na,e

//non production examplar
const content = posts.map((post) => 
  <Post
    key = {post.id}
    id= {post.id}
   title={post.title}
   />
 );
  //declaring separate list items
function NumberList(props){
  const numbers = props.numbers;
  const listItems = numbers.map((number) => 
  <ListItem 
    key={number.toString()}
    value={number} 
    />
  );
   
   return(
   <ul>
     {listItems}
   </ul>
  );
}


//embedding map in jsx

function ListItems(props){
  return <li>{props.value}</li>;
}

function NumberList(props){
  const numbers = props.numbers;
  return (
    <ul>
      {numbers.map((number) =>
       <ListItems 
         key={number.toString()}
         value={number}
         />
                 
      )}
    </ul>
  );
}

const numbers = [1,2,3,4,5,6,7,8,9,0];
ReactDOM.render(
  <NumberList numbers={numbers} />,
  document.getElementById('root')
);


//controlled components to enable form submission

//create component
class NameForm extends React.Component {
  constructor(props){
    super(props);
    this.state = {value: ''};
    
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(event){
    this.setState({value: event.target.value});
  }
  handleSubmit(event){
    alert('Hello: ' + this.state.value);
    event.preventDefault();
  }
  
  render(){
    return(
    <form onSubmit={this.handleSubmit}>
      <label>
        Name:
        <input type="text" value={this.state.value} onChange={this.handleChange}/>
      </label>
      <input type="submit" value="Submit"/>
    </form>
      );
  }
}

ReactDOM.render(
  <NameForm />,
  document.getElementById('root')
);


//validate user input
//sample does not output stuff

//handleChange(event){
//  this.setState({value: event.target.value.toUpperCase()});
//}

//text area tag
//<textarea>
 // Hello Stranger, this is the time to write soem text.
//</textarea>
//in react a <> uses a value attr.
//this can be written like a form with single input

class EssayForm extends React.Component{
  constructor(props){
    super(props);
      this.state = {
        value: 'Please write the essay about the most miserable day of your life.'
      };
      this.handleChange = this.handlechange.bind(this);
      this.handlesubmit = this.handleSubmit.bind(this);
    }
    
    handleChange(event){
      this.setState({value: event.target.value});
    }
    
    handleSubmit(event){
      alert('An essay was submitted: '+ this.state.value);
      event.preventDefault();
    }
    
    render(){
      return(
        <form onSubmit={this.handleSubmit}>
          <label>
            Essay:
            <textarea 
              value={this.state.value}
              onChange={this.handleChange}
            />
          
          </label>
          <input type="submit" value="Sumbit"/>
        </form>
      );
    }
  }


  //validate user input
//sample does not output stuff

handleChange(event){
  this.setState({value: event.target.value.toUpperCase()});
 }
 
 //text area tag
 <textarea>
   Hello Stranger, this is the time to write soem text.
 </textarea>
 //in react a <> uses a value attr.
 //this can be written like a form with single input
 
 class EssayForm extends React.Component{
   constructor(props){
     super(props);
       this.state = {
         value: 'Please write the essay about the most miserable day of your life.'
       };
       this.handleChange = this.handlechange.bind(this);
       this.handlesubmit = this.handleSubmit.bind(this);
     }
     
     handleChange(event){
       this.setState({value: event.target.value});
     }
     
     handleSubmit(event){
       alert('An essay was submitted: '+ this.state.value);
       event.preventDefault();
     }
     
     render(){
       return(
         <form onSubmit={this.handleSubmit}>
           <label>
             Essay:
             <textarea 
               value={this.state.value}
               onChange={this.handleChange}
             />
 
           </label>
           <input type="submit" value="Sumbit"/>
         </form>
       );
     }
   }
 
 ReactDOM.render(
   <EssayForm />,
   document.getElementById('root')
   
 );

 
 //control compoent with select list

class FlavorForm extends React.Component{
  constructor(props){
    super(props);
    this.state = {value: 'coconut'};
    
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    
  }
  handleChange(event){
    this.setState({value: event.target.value});
  }
  
  handleSubmit(event){
    alert('Your favorite flavor is: ' + this.state.value);
    event.preventDefault();
  }
  
  render(){
    return(
      <form onSubmit={this.handleSubmit}>
        <label>
          Pick your favourite flavour:
          <select value={this.state.value} onChange={this.handleChange}>
            <option value="grapefruit"> Grapefruit</option>
            <option value="peach"> Peach</option>
            <option value="apple">Apple</option>
            <option value="orange">Orange</option>
            <option value="coconut">Coconut</option>
          </select>
        </label>
        <input type="submit" value="Submit"/>
      </form>
    );
  }
}

ReactDOM.render(
  < FlavorForm />,
  document.getElementById('root')
);
//

//Handles Multiple inputs
class Reservation extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      isGoing: true,
      numberOfGuests: 6
    };
    this.handleInputChange = this.handleInputChange.bind(this);
  }
  handleInputChange(event){
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;
    
    this.setState({
      [name]: value
    });
  }
  
  render(){
    return(
      <form>
        <label>
          Is going:
          <input
            name="isGoing"
            type="checkbox"
            checked={this.state.isGoing}
            onChange={this.handleInputChange}
            />
        </label>
        <br />
        <label>
          Number of guests:
          <input
            name="numberOfGuests"
            type="number"
            value={this.state.numberOfGuests}
            onChange={this.handleInputChange}
            />
        </label>
      </form>
    );
  }
}

ReactDOM.render(
  <Reservation />,
  document.getElementById('root')
);


//lifting state up
//create component BoilingVerdict

function BoilingVerdict(props){
  if(props.celsius >= 100){
    return <p>The water would boil.</p>;
    
  }
  return <p>The water would not boil.</p>;
}

//create component Calculator
class Calculator extends React.Component{
  constructor(props){
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.state = {temperature: ''};
  }
  
  handleChange(e){
    this.setState({temperature: e.target.value});
  }
  
  render(){
    const temperature = this.state.temperature;
    return(
      <fieldset>
        <legend>Enter temperature in celsius:</legend>
        <input 
          value={temperature}
          onChange={this.handleChange}
          />
         <BoilingVerdict celsius={parseFloat(temperature)} />
      </fieldset>
    );
  }
}

ReactDOM.render(
< Calculator />,
  document.getElementById('root')
);

//fnacy border using composition

function FancyBorder(props) {
  return (
    <div className={'FancyBorder FancyBorder-' + props.color}>
      {props.children}
    </div>
  );
}

function WelcomeDialog() {
  return (
    <FancyBorder color="blue">
      <h1 className="Dialog-title">
        Welcome
      </h1>
      <p className="Dialog-message">
        Thank you for visiting our spacecraft!
      </p>
    </FancyBorder>
  );
}

ReactDOM.render(
  <WelcomeDialog />,
  document.getElementById('root')
);
/*.FancyBorder {
  padding: 10px 10px;
  border: 10px solid;
}

.FancyBorder-blue {
  border-color: blue;
}

.Dialog-title {
  margin: 0;
  font-family: sans-serif;
}

.Dialog-message {
  font-size: larger;
   */

//slack like interface

function Contacts() {
  return <div className="Contacts" />;
}

function Chat() {
  return <div className="Chat" />;
}

function SplitPane(props) {
  return (
    <div className="SplitPane">
      <div className="SplitPane-left">
        {props.left}
      </div>
      <div className="SplitPane-right">
        {props.right}
      </div>
    </div>
  );
}

function App() {
  return (
    <SplitPane
      left={
        <Contacts />
      }
      right={
        <Chat />
      } />
  );
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
//css
/*html, body, #root {
  width: 100%;
  height: 100%;
}

.SplitPane {
  width: 100%;
  height: 100%;
}

.SplitPane-left {
  float: left;
  width: 30%;
  height: 100%;
}

.SplitPane-right {
  float: left;
  width: 70%;
  height: 100%;
}

.Contacts {
  width: 100%;
  height: 100%; 
  background: lightblue;
}

.Chat {
  width: 100%;
  height: 100%; 
  background: pink;
}
 */

 //fancy dialog with SPECIALIZATION

 function FancyBorder(props) {
  return (
    <div className={'FancyBorder FancyBorder-' + props.color}>
      {props.children}
    </div>
  );
}

function Dialog(props) {
  return (
    <FancyBorder color="blue">
      <h1 className="Dialog-title">
        {props.title}
      </h1>
      <p className="Dialog-message">
        {props.message}
      </p>
    </FancyBorder>
  );
}

function WelcomeDialog() {
  return (
    <Dialog
      title="Welcome"
      message="Thank you for visiting our spacecraft!" />
  );
}

ReactDOM.render(
  <WelcomeDialog />,
  document.getElementById('root')
);
// Acampanying css
/**
 .FancyBorder {
  padding: 10px 10px;
  border: 10px solid;
}

.FancyBorder-blue {
  border-color: blue;
}

.Dialog-title {
  margin: 0;
  font-family: sans-serif;
}

.Dialog-message {
  font-size: larger;
}
 */

 //using class to create composition
 function FancyBorder(props) {
  return (
    <div className={'FancyBorder FancyBorder-' + props.color}>
      {props.children}
    </div>
  );
}

function Dialog(props) {
  return (
    <FancyBorder color="blue">
      <h1 className="Dialog-title">
        {props.title}
      </h1>
      <p className="Dialog-message">
        {props.message}
      </p>
      {props.children}
    </FancyBorder>
  );
}

class SignUpDialog extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleSignUp = this.handleSignUp.bind(this);
    this.state = {login: ''};
  }

  render() {
    return (
      <Dialog title="Mars Exploration Program"
              message="How should we refer to you?">
        <input value={this.state.login}
               onChange={this.handleChange} />
        <button onClick={this.handleSignUp}>
          Sign Me Up!
        </button>
      </Dialog>
    );
  }

  handleChange(e) {
    this.setState({login: e.target.value});
  }

  handleSignUp() {
    alert(`Welcome aboard, ${this.state.login}!`);
  }
}

ReactDOM.render(
  <SignUpDialog />,
  document.getElementById('root')
);
/*
.FancyBorder {
  padding: 10px 10px;
  border: 10px solid;
}

.FancyBorder-blue {
  border-color: blue;
}

.Dialog-title {
  margin: 0;
  font-family: sans-serif;
}

.Dialog-message {
  font-size: larger;
}
 */