import { Rate, Card} from 'antd';
import { FrownOutlined, SmileOutlined } from '@ant-design/icons';
import styles from './SurveySlider.module.css'

export default function StarRating({callback}) {
  return (
    <div className={styles.surveySliderContainer} bordered={false}>
        <div className={styles.surveySliderIcon}>
          <FrownOutlined />
        </div>
        <div className={styles.surveySliderSlide}>
          <Rate className={styles.surveySliderItem} onChange={callback}/>
        </div>
        <div className={styles.surveySliderIcon}>
          <SmileOutlined  />
        </div>
    </div>
  )
}