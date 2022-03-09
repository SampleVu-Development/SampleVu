import styles from './ReOrderBlock.module.css'
import { UpOutlined, DownOutlined } from '@ant-design/icons';
import { Button } from 'antd';

function moveUp() {
  // update state here
  console.log('move up');
}

function moveDown() {
  // update state here
  console.log('move down');
}

export default function ReOrderBlock () {
  return (
    <div className={styles.reOrderContainer}>
        <div className={styles.reOrderTitle}> Re-order question</div> 
        <div className={styles.reOrderBtn}> 
          <Button type="text">
            <UpOutlined onClick={moveUp} /> 
          </Button>
          <Button type="text">
            <DownOutlined onClick={moveDown}/> 
          </Button>
        </div>
    </div>
  )
}
