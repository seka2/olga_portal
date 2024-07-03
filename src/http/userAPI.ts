import { $authHost, $host } from './index';
import { AxiosResponse } from 'axios';
import { jwtDecode } from 'jwt-decode';


interface SharedAuthResponse {
  result: boolean,
  message?: string,
  error?: string,
  token?: string;
}

  export const restorePasswordData = async (
    password_new: string,
    password_new_confirn: string,
    uid: string
  ): Promise<SharedAuthResponse> => {
    const { data }: AxiosResponse<SharedAuthResponse> = await $host.post('api/user/restore_password_data', {
      password_new, password_new_confirn, uid
    });
    return data;
  }
  
  export const checkPassRestore = async (
    uid: string
  ): Promise<SharedAuthResponse> => {
    const { data }: AxiosResponse<SharedAuthResponse> = await $host.post('api/user/check_pass_restore', {
      uid
    });
    return data;
  }
  
  export const restorePassword = async (
    email: string
  ): Promise<SharedAuthResponse> => {
    const { data }: AxiosResponse<SharedAuthResponse> = await $host.post('api/user/restore_password', {
      email
    });
    return data;
  }
  
  export const register = async (
    email: string,
    password: string,
    confirm_password: string
  ): Promise<SharedAuthResponse> => {
    const { data }: AxiosResponse<SharedAuthResponse> = await $host.post('api/user/register', {
      email, password, confirm_password
    });
    return data;
  }
  
  export const finishRegister = async (
    email: string,
    password: string,
    confirm_password: string,
    code: string
  ): Promise<any> => {
    const { data }: AxiosResponse<SharedAuthResponse> = await $host.post('api/user/finish_register', {
      email, password, confirm_password, code
    });
    if (data.token) {
      localStorage.setItem('token', data.token);
      return jwtDecode(data.token);
    }
    return data;
  }
  
  
  export const registration = async (
    email: string,
    password: string,
    confirm_password: string,
    name: string,
  ): Promise<SharedAuthResponse> => {
    const method = "portalRegistration";
    try {
      const { data }: AxiosResponse<SharedAuthResponse> = await $host.post('request.php', {
        method, email, password, confirm_password, name
      });
      return data;
    } catch (error) {
      console.error('Ошибка при выполнении запроса:', error);
      throw error;
    }
  }



  
  export const finishRegistration = async (
    email: string,
    password: string,
    confirm_password: string,
    name: string,
    code: string
  ): Promise<any> => {

    const method = "portalRegistrationCode";
    try {
      const { data }: AxiosResponse<SharedAuthResponse> = await $host.post('request.php', {
        method, email, password, confirm_password, name, code
      });
      if (data.result && data.token) {
        localStorage.setItem('token', data.token);
      }
      return data;
    } catch (error) {
      console.error('Ошибка при выполнении запроса:', error);
      throw error;
    }

  }
  
  
  export const login = async (
    email: string,
    password: string
  ): Promise<SharedAuthResponse> => {
    const method = "portalLogin";
    try {
      const { data }: AxiosResponse<SharedAuthResponse> = await $host.post('request.php', {
        method, email, password
      });
      if (data.result && data.token) {
        localStorage.setItem('token', data.token);
      }
      return data;
    } catch (error) {
      console.error('Ошибка при выполнении запроса:', error);
      throw error;
    }
  }
  
  
  export const finishLogin = async (
    email: string,
    password: string,
    code: string
  ): Promise<any> => {

    const method = "portalLoginCode";
    try {
      const { data }: AxiosResponse<SharedAuthResponse> = await $host.post('request.php', {
        method, email, password, code
      });
      if (data.result && data.token) {
        localStorage.setItem('token', data.token);
      }
      return data;
    } catch (error) {
      console.error('Ошибка при выполнении запроса:', error);
      throw error;
    }

  }
  
  export const checkIsAuth = async (): Promise<any> => {
    const method = "portalCheckIsAuth";
    try {
      const { data }: AxiosResponse<SharedAuthResponse> = await $authHost.post('request.php', {
        method
      });
      if (data.result && data.token) {
        localStorage.setItem('token', data.token);
      }
      return data;
    } catch (error) {
      console.error('Ошибка при выполнении запроса:', error);
      throw error;
    }
  }
  

  
  export const changeUserProfile = async (
    name: string,
    photo: string
  ): Promise<any> => {
    const method = "portalChangeUserProfile";
    try {
      const { data }: AxiosResponse<SharedAuthResponse> = await $authHost.post('request.php', {
        method,
        name,
        photo
      });
      if (data.result && data.token) {
        localStorage.setItem('token', data.token);
      }
      return data;
    } catch (error) {
      console.error('Ошибка при выполнении запроса:', error);
      throw error;
    }
  }

  
  export const changeUserPassword = async (
    currentPassword: string,
    newPassword: string,
    confirmPassword: string,
  ): Promise<any> => {
    const method = "portalChangeUserPassword";
    try {
      const { data }: AxiosResponse<SharedAuthResponse> = await $authHost.post('request.php', {
        method,
        currentPassword,
        newPassword,
        confirmPassword
      });
      if (data.result && data.token) {
        localStorage.setItem('token', data.token);
      }
      return data;
    } catch (error) {
      console.error('Ошибка при выполнении запроса:', error);
      throw error;
    }
  }
  

  
  export const changeUserDeposit = async (
    deposit: number,
    risk: number
  ): Promise<any> => {
    const method = "portalChangeUserDeposit";
    try {
      const { data }: AxiosResponse<SharedAuthResponse> = await $authHost.post('request.php', {
        method,
        deposit,
        risk
      });
      if (data.result && data.token) {
        localStorage.setItem('token', data.token);
      }
      return data;
    } catch (error) {
      console.error('Ошибка при выполнении запроса:', error);
      throw error;
    }
  }
  