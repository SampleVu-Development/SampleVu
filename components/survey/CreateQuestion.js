import { Card, Button, Modal, Input, Radio } from 'antd';
import { PlusCircleOutlined, DeleteOutlined } from '@ant-design/icons';
import styles from './CreateQuestion.module.css';
import { useState } from 'react';
const { TextArea } = Input;

export default function CreateQuestion({callback}) {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const defaultText = "type option here..."
  const [questionTitle, setQuestionTitle] = useState("")
  const [currentOptions, setOptions] = useState([defaultText])

  const addQuestion = () => {
    currentOptions.push(defaultText)
    setOptions([...currentOptions] )
  }

  const deleteQuestion = (i) => {
    currentOptions.splice(i, 1)
    const newOptions = [...currentOptions]
    setOptions(newOptions)
    const optionDisplay = document.getElementById('optionDisplay')
    initOptionDisplay(newOptions);
    optionDisplay = currentOptionDisplay;
  }


  const updateQuestion = (i, e) => {
    currentOptions[i] = e.target.value;
    setOptions([...currentOptions])
  }

  let currentOptionDisplay = []
  
  const initOptionDisplay = (options) => {
    currentOptionDisplay = []
    for (let i = 0; i < options.length; i++) {
      if (options[i] == defaultText) {
        currentOptionDisplay.push(
          <div>
            <Radio className={styles.choiceDiv}>
              <Input bordered={false} placeholder={options[i]} onChange={(e) => updateQuestion(i, e)}/>
            </Radio>
            <Button className="no-border curvedBorder" onClick={() => deleteQuestion(i)}><DeleteOutlined /></Button>
          </div>
        )
      } else {
        currentOptionDisplay.push(
          <div>
            <Radio className={styles.choiceDiv}>
              <Input bordered={false} defaultValue={options[i]} onChange={(e) => updateQuestion(i, e)}/>
            </Radio>
            <Button className="no-border curvedBorder" onClick={() => deleteQuestion(i)}><DeleteOutlined /></Button>
          </div>
        )
      }
    }
  }

  initOptionDisplay(currentOptions);

  const showModal = () => {
    setOptions([defaultText])
    setQuestionTitle("")
    setIsModalVisible(true);
  };
  const handleOk = () => {
    // SET VARIABLES TO STATE AND ADD A NEW QUESTION TO THE VIEW
    callback({type: 'create', title: questionTitle, data: [...currentOptions]})
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    // RESET ALL VARIABLES TO INITIAL STATES IN MODAL
    setIsModalVisible(false)
  };

  const afterClose = () => {
    const inputModal = document.getElementById('inputModal')
  }

  const modal = (
      <Modal title="Create Question" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel} afterClose={afterClose} destroyOnClose={true}>
          <Card className="no-border">
            <TextArea rows={1} id="inputModal" className="curvedBorder" 
              placeholder="Write question here..." 
              onChange={(e) => setQuestionTitle(e.target.value)}
            />
            <br />
            <br />
            <div id="optionDisplay">
              {currentOptionDisplay}
            </div>
            <Card bordered={false}>
              <Button className='curvedBorder' onClick={addQuestion}><PlusCircleOutlined /> Add option</Button>
            </Card>
          </Card>
        </Modal>
    )

  return (
    <>
      <div className="custom-container">
        <Button className="curvedBorder" bordered={false} onClick={showModal}>
          <PlusCircleOutlined />
          Add Question
        </Button>
      </div>
      {modal}
      
    </>
  )
}