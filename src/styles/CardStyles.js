const styles = {
    root: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        margin: '30px 0px 0px 0px'       
    },
    scoreCard: {
        height: '700px',
        width: '600px',
        display: 'flex',
        flexFlow: 'column',
        alignItems: 'center',
        // justifyContent: 'center',
        backgroundColor: 'black',
        borderRadius: '15px',
        border: '1px solid white',
        fontFamily: 'Crewmate',
        textAlign: 'center',
        fontSize: '32px',
        marginTop: '40px'
    },
    title: {
        marginTop: '20px'
    },
    subTitle: {
        color: 'white',
        fontSize: '35px',
        textDecoration: 'underline',
        marginTop: '0px'
    },
    startButton: {
        color: 'white',
        backgroundColor: 'black',
        fontFamily: 'Amoung-us',
        fontSize: '25px',
        border: '1px solid white',
        borderRadius: '5px',
        padding: '5px 5px 0px 5px',
        textDecoration: 'none',
        textAlign: 'center',
        verticalAlign: 'center',
        height: '55px',
        width: '95px'
    },
    highScores: {
        height: '350px',
        width: '200px',
    }
};
export default styles;