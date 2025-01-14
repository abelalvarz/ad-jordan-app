import { PageContainer } from '@/UI/App/styled-components/PageContainer'
import { CreateReport } from './components/CreateReport'
import { forwardRef, useEffect, useImperativeHandle, useRef, useState } from 'react'
import { isStandalone } from '@/UI/App/utils/standaloneChecker';

interface ModalHandle {
  showModal: () => void;
  hideModal: () => void;
}
export const ReportCreationPage = forwardRef<ModalHandle>((_, ref) => {
  const createReportRef = useRef(null);

  const [visible, setVisible] = useState(true);
  useEffect(()=>{
    console.log(visible)
  },[])

  const showModal = () => {
    if (createReportRef.current) {
      setVisible(true)
    }
  }

  const hideModal = () => {
    if (createReportRef.current) {
      setVisible(!visible)
    }
  }
  useImperativeHandle(ref, () => ({
    showModal,
    hideModal,
  }));

  return (
    <PageContainer >
      {/* <div className={`${isStandalone && visible ? 'visible' : 'hidden'}`}> */}
        <CreateReport />
      {/* </div> */}
    </PageContainer>
  )
})
