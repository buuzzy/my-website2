import React, { useState, useEffect } from 'react';
import styles from './styles.module.css';

export default function NotificationModal() {
  const [isOpen, setIsOpen] = useState(true);

  useEffect(() => {
    const hasModalBeenDismissed = localStorage.getItem('modalDismissed');
    const lastDismissalTime = localStorage.getItem('modalDismissedTime');
    
    const shouldShowAgain = !lastDismissalTime || 
      (Date.now() - parseInt(lastDismissalTime)) > 24 * 60 * 60 * 1000;
    
    if (hasModalBeenDismissed && !shouldShowAgain) {
      setIsOpen(false);
    }
  }, []);

  const handleClose = () => {
    setIsOpen(false);
    localStorage.setItem('modalDismissed', 'true');
    localStorage.setItem('modalDismissedTime', Date.now().toString());
  };

  if (!isOpen) {
    return null;
  }

  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modalContent}>
        <p className={styles.modalText}>
          新网站域名为 www.buuzzy.top，旧域名将在月底过期，不再维护 <br/> AI 编程的试读文档已上线，感兴趣请联系我付费订阅<br/> 微信：buuzzy0603
        </p>
        <button className={styles.modalButton} onClick={handleClose}>
          我知道了
        </button>
      </div>
    </div>
  );
}