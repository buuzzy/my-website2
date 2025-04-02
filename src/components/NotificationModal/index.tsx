import React, { useState, useEffect } from 'react';
import styles from './styles.module.css';

export default function NotificationModal(): JSX.Element {
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
          域名即将在月底过期，后续 Cursor 编程内容和产品文档将会重新部署到新网站。获取通知请加我微信：buuzzy0603。
        </p>
        <button className={styles.modalButton} onClick={handleClose}>
          我知道了
        </button>
      </div>
    </div>
  );
}