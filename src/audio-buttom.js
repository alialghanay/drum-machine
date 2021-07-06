import { Component } from 'react';
import { connect } from 'react-redux';
import DNC from './drum-sample-obj';
import './App.css';

let i = 0;
class AudioButtom extends Component {
    componentDidMount() {
        document.addEventListener("keydown", this.handleKeyPress.bind(this));
    }
    componentWillUnmount() {
        document.removeEventListener("keydown", this.handleKeyPress.bind(this));
    }

    playSound(clip){
        const aduioTag = document.getElementById(clip.keyTrigger);
        aduioTag.currentTime = 0;
        aduioTag.play();
        i = DNC.indexOf(clip);
        this.props.playedSound(i);
          
    }

  handleKeyPress(e){
    let clip = DNC.filter(clip => clip.keyCode === e.keyCode);
    if(clip.length > 0){
        this.playSound(clip[0]);
    };
    
}


       
    render() {
        return(
          <div className='aduio-bottom'>
              {DNC.map(clip => <button key={clip.keyCode} id={clip.id} className='drum-pad' onClick={() => this.playSound(clip)}>
                <audio className='clip' id={clip.keyTrigger} src={clip.src}/>{clip.keyTrigger}
              </button>)}
          </div>
        );
    }
} 

const mapDispatchToProps = (dispatch) => {
    return { playedSound: (id) => dispatch( {type: 'playedSound', id: id} )
    }
  }



export default connect(null, mapDispatchToProps)(AudioButtom);
/*
When a .drum-pad is triggered, a string describing the associated audio clip is displayed as the inner text of the #display element (each string must be unique).




 constructor(props){
        super(props);
        this.state = {
            
        }
        this.playSound = this.playSound.bind(this);
        this.handleKeyPress = this.handleKeyPress.bind(this);
    }
*/