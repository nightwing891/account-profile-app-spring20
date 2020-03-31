React Context API


Context is designed to share data that can be considered "global" for a 
tree of React components
  - eliminate prop drilling

  - User Authentication
  - Style Themes
  - Language Preferences 
  - Access in a global scale
   - HOC 
   - CRUD from the HOC
  
Redux, FLUX 
Martyjs

error418 i'm a teapot


























class App extends React.Component {
  render() {
    return <Toolbar theme="dark" />;
  }
}

const Toolbar = ({ theme }) => {
  return (
    <div>
      <ThemedButton theme={theme} />
    </div>
  );
}

class ThemedButton extends React.Component {
  render() {
    return <Button theme={this.props.theme} />;
  }
}





const ThemeContext = React.createContext('light');

class App extends React.Component {
  render() {
    return (
      <ThemeContext.Provider value="dark">
        <Toolbar />
      </ThemeContext.Provider>
    );
  }
}

const Toolbar = () => {
  return (
    <div>
      <ThemedButton />
    </div>
  );
}

class ThemedButton extends React.Component {
  static contextType = ThemeContext;
  render() {
    return <Button theme={this.context} />;
  }
}




            //        Index
            //          |
            //         App
            //          |
            //         Home (add)
            //         / \
            //  Form       List (add)
            //               \
            //               Item (add)








            //         Index
            //          |
            //         App
            //          |
            //       Facebook (user)
            //         / \
            //  PForm       Posts (user)
            //               \
            //               Post (user)
            //                / \
            //          CForm    Comments (user) 
            //                     \
            //                      Comment (user)









    //       Index
    //         |
    //        App
    //           \
    //            Facebook (user)
    //         |                \ 
    //      Messages (user)        Market (user)
    //        / \                      \
    // PForm       Posts (user)         List (user)
    //              \                     \
    //              Post (user)            Item (user)
    //               / \                     \ 
    //         CForm    Comments (user)       Reviews (user)
    //                    \                       \
    //                     Comment (user)        Review(user)




//  Context API
//  Provider  store globaly        Index
// {Consumer}                     |
//                                App
//                               /             \ 
//                         Messages             Market 
//                           / \                      \
//                   PForm       Posts                 List 
//                                 \                     \
//                                 {Post} (user)            Item 
//                                   / \                     \ 
//                             CForm    Comments          Reviews 
//                                       \                       \
//                                         {Comment} (user)        {Review}(user)



user Date, member, username


 Context
  provider 
     user  = { date, member, username }

     updateuser
     adduser 
     deleteuser
 { consumer }
 
                          index 
                         app (routes)
                {navbar} (username)    accountProfile
                               {Form}                {account} (date, member, username)
                               