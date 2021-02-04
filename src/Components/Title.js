import React from 'react';

 function Title() {
    console.log('Renndering title');
    return <h3> This is the useCallback react hook concept.</h3>
}
export default React.memo(Title);