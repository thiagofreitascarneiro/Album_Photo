
import { dark } from '@material-ui/core/styles/createPalette';
import { makeStyles } from '@material-ui/styles';
import { textAlign } from '@material-ui/system';



const useStyles = makeStyles({
   container: {
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    border: 0,
    borderRadius: 3,
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    color: 'white',
    height: 48,
    padding: '0 30px',    
   }, 

   button: {
    marginTop: '40px',
    background: 'linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)',
    border: 0,
    borderRadius: 3,
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    color: 'white',
    height: 48,
    padding: '0 30px', 
   },

   icon: {
       marginRight: '20px',   
   },
   cardGrid: { 
       padding: '20px 0',
   },

   card: {
       height: '100%',
       display: 'flex',
       flexDirection: 'column'

   },

   cardMedia: {
       paddingTop: '56.25%'

   },
   cardContent: {
       flexGrow: 1,

   },

   footer: {
       background: 'linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)',
       padding: '50px',
       textAlign: 'center'

   },

   text: {
    marginLeft:'auto',
    marginRight:'auto',
    textAlign: 'left 20px',
    textColor: '#FFFFFF',
   }

});


export default useStyles;

