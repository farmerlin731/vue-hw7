import emitter from '@/methods/mitt';

export default function (response, title = '更新') {
    if (response.data.success) {
        emitter.emit('push-message', {
            style: 'success',
            title: `${title}成功！ :)`,
        });
    } else {
        // Let the type of error msg be arr.
        const message = typeof response.data.message === 'string'
            ? [response.data.message] : response.data.message;
        emitter.emit('push-message', {
            style: 'danger',
            title: `${title}失敗.. :(`,
            content: message.join('、'),
        });
    }
}


