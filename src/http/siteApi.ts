import { $authHost } from './index';
import { AxiosResponse } from 'axios';


interface SharedAuthResponse {
  result: boolean,
  message?: string,
  error?: string,
  token?: string;
}

interface AnalyticsRequestData {
  page?: number,
  limit?: number,
  search?: string,
  sector?: string,
}

export const getAnalytics = async (prop: AnalyticsRequestData = {}): Promise<any> => {
  const method = "portalGetAlanlytics";
  try {
    const { data }: AxiosResponse<SharedAuthResponse> = await $authHost.post('request.php', {
      method,
      ...prop
    });
    return data;
  } catch (error) {
    console.error('Ошибка при выполнении запроса:', error);
    throw error;
  }
}



export const getFaq = async (): Promise<any> => {
  const method = "portalGetFaq";
  try {
    const { data }: AxiosResponse<SharedAuthResponse> = await $authHost.post('request.php', {
      method
    });
    return data;
  } catch (error) {
    console.error('Ошибка при выполнении запроса:', error);
    throw error;
  }
}

export const getMaterials = async (): Promise<any> => {
  const method = "portalGetMaterials";
  try {
    const { data }: AxiosResponse<SharedAuthResponse> = await $authHost.post('request.php', {
      method
    });
    return data;
  } catch (error) {
    console.error('Ошибка при выполнении запроса:', error);
    throw error;
  }
}


export const getMaterial = async (id: number): Promise<any> => {
  const method = "portalGetMaterial";
  try {
    const { data }: AxiosResponse<SharedAuthResponse> = await $authHost.post('request.php', {
      method,
      id
    });
    return data;
  } catch (error) {
    console.error('Ошибка при выполнении запроса:', error);
    throw error;
  }
}


export const getNotifications = async (): Promise<any> => {
  const method = "portalGetNotifications";
  try {
    const { data }: AxiosResponse<SharedAuthResponse> = await $authHost.post('request.php', {
      method,
    });
    return data;
  } catch (error) {
    console.error('Ошибка при выполнении запроса:', error);
    throw error;
  }
}


export const setNotificationReaded = async (id: number): Promise<any> => {
  const method = "portalSetNotificationReaded";
  try {
    const { data }: AxiosResponse<SharedAuthResponse> = await $authHost.post('request.php', {
      method,
      id
    });
    return data;
  } catch (error) {
    console.error('Ошибка при выполнении запроса:', error);
    throw error;
  }
}






interface SignalRequestData {
  search?: string,
  orderBy?: string,
  orderByDiraction?: string,
}

export const getSignals = async (prop: SignalRequestData = {}): Promise<any> => {
  const method = "portalGetSignals";
  try {
    const { data }: AxiosResponse<any> = await $authHost.post('request.php', {
      method,
      ...prop
    });
    return data;
  } catch (error) {
    console.error('Ошибка при выполнении запроса:', error);
    throw error;
  }
}

export const getSignalArchive = async (): Promise<any> => {
  const method = "portalGetSignalsArchive";
  try {
    const { data }: AxiosResponse<any> = await $authHost.post('request.php', {
      method
    });
    return data;
  } catch (error) {
    console.error('Ошибка при выполнении запроса:', error);
    throw error;
  }
}



export const getStatistic = async (): Promise<any> => {
  const method = "portalGetStatistic";
  try {
    const { data }: AxiosResponse<any> = await $authHost.post('request.php', {
      method
    });
    return data;
  } catch (error) {
    console.error('Ошибка при выполнении запроса:', error);
    throw error;
  }
}

export const getFreeAnalytics = async (): Promise<any> => {
  const method = "portalGetAnalytics";
  try {
    const { data }: AxiosResponse<any> = await $authHost.post('request.php', {
      method
    });
    return data;
  } catch (error) {
    console.error('Ошибка при выполнении запроса:', error);
    throw error;
  }
}


export const getFreeEducation = async (): Promise<any> => {
  const method = "portalGetEducation";
  try {
    const { data }: AxiosResponse<any> = await $authHost.post('request.php', {
      method
    });
    return data;
  } catch (error) {
    console.error('Ошибка при выполнении запроса:', error);
    throw error;
  }
}


export const sendMistake = async (message: string, file: string): Promise<any> => {
  const method = "portalSendMistake";
  try {
    const { data }: AxiosResponse<any> = await $authHost.post('request.php', {
      method,
      message, 
      file
    });
    return data;
  } catch (error) {
    console.error('Ошибка при выполнении запроса:', error);
    throw error;
  }
}
