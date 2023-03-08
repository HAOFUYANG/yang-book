import React from 'react';
import Button,{ButtonSize,ButtonType} from './components/Button/button'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
      </header>
      <Button className={'custom'} autoFocus onClick={(e)=>{console.log('e', e)}}>哈哈</Button>
      <Button btnType={ButtonType.Primary} size={ButtonSize.Large}>{'Button'}</Button>
      <Button btnType={ButtonType.Danger} size={ButtonSize.Large}>{'Button'}</Button>
      <Button  size={ButtonSize.Large}>{'Button'}</Button>

      <Button disabled btnType={ButtonType.Primary} size={ButtonSize.Large}>{'Button'}</Button>

      <Button btnType={ButtonType.Link} href='http://www.baidu.com' size={ButtonSize.Small}>{'Link Button'}</Button>
    </div>
  );
}

export default App;
