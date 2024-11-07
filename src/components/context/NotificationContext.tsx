import { createContext, ReactNode, useState } from "react";
import { toast } from "react-toastify";

interface NotifyContextType {
    notifyValue: string;
    notifyStyle: 'success' | 'warning' | 'error';
    showNotification: (msg: string) => void;
}
// Tạo Context với giá trị mặc định
export const NotificationContext = createContext<NotifyContextType | undefined>(undefined);

export const NotificationProvider: React.FC<{ children: ReactNode }> = ({ children }) => {




    const [notifyValue, setNotifyValue] = useState<string>('');
    const [notifyStyle, setNotifyStyle] = useState<'success' | 'warning' | 'error'>('success');

    const showNotification = (msg: string) => {
        toast(msg);
    };

    return (
        <NotificationContext.Provider value={{ notifyValue, notifyStyle, showNotification }}>
            {children}
        </NotificationContext.Provider>
    );
};