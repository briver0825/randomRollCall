import {
    reactive
} from '@vue/reactivity';

import mock from "@/mock/index.js";
import {
    getItem,
    setItem
} from "@/utils/storage.js";

export default () => {
    const storageResult = getItem('userList')
    // 默认的用户列表
    const userList = reactive(storageResult || mock.userList);
    // 抽到的用户
    const resultUser = reactive([]);
    // 添加用户    
    const addUser = (username) => {
        userList.push(username)
        setItem('userList', userList)
    }
    // 删除用户
    const removeUSer = (index) => {
        userList.splice(index, 1)
        setItem('userList', userList)
    }
    // 抽奖的函数
    const randomUSer = () => {
        return Math.round(Math.random() * (userList.length - 1));
    };
    // 开始抽奖
    const startRandom = () => {
        // 抽中用户的索引
        let index = randomUSer();
        // 将抽中的用户添加到抽中的用户列表中
        resultUser.push(userList[index]);
        // 抽中的用户在原来的列表中去除
        removeUSer(index)
    }

    return {
        userList,
        addUser,
        removeUSer,
        resultUser,
        startRandom
    }
}