/*
 * Copyright (c) 2019-2021 Gengwei Zheng (herodotus@aliyun.com)
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * Project Name: eurynome-cloud
 * Module Name: eurynome-cloud-assistant
 * File Name: MinioInvalidKeyException.java
 * Author: gengwei.zheng
 * Date: 2021/11/08 20:46:08
 */

package cn.herodotus.eurynome.assistant.exception.oss;

/**
 * <p>Description: MinioInvalidKeyException </p>
 *
 * @author : gengwei.zheng
 * @date : 2021/11/8 14:32
 */
public class MinioInvalidKeyException extends MinioException {

    public MinioInvalidKeyException() {
        super();
    }

    public MinioInvalidKeyException(String message) {
        super(message);
    }

    public MinioInvalidKeyException(String message, Throwable cause) {
        super(message, cause);
    }

    public MinioInvalidKeyException(Throwable cause) {
        super(cause);
    }

    public MinioInvalidKeyException(String message, Throwable cause, boolean enableSuppression, boolean writableStackTrace) {
        super(message, cause, enableSuppression, writableStackTrace);
    }
}
