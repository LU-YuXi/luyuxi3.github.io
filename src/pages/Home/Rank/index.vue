<template>
     <div class="rank">
            <div class="tab">
                <div class="tab-tit clearfix">
                    <a href="javascript:;" class="on">
                        <p class="img">
                            <i></i>
                        </p>
                        <p class="text">尔克排行</p>
                    </a>
                    <a href="javascript:;">
                        <p class="img">
                            <i></i>
                        </p>
                        <p class="text">AJ排行</p>
                    </a>
                    <a href="javascript:;">
                        <p class="img">
                            <i></i>
                        </p>
                        <p class="text">潮牌排行</p>
                    </a>
                </div>

            </div>
            <div class="content">
                <ul>
                    <li>
                        <div class="img-item">
                            <p class="tab-pic">
                                <a href="#">
                                    <img src="./images/1.jpg" />
                                </a>
                            </p>
                            <div class="tab-info">
                                <div class="info-title">
                                    <a href="#">【官网价直降50】鸿星尔克官方旗舰运动鞋男 夏季网面透气轻便休闲跑步鞋男运动鞋</a>
                                </div>
                                <p class="info-price">定金：¥200.00</p>
                            </div>
                        </div>
                        <div class="img-item">
                            <p class="tab-pic">
                                <a href="#">
                                    <img src="./images/1.jpg" />
                                </a>
                            </p>
                            <div class="tab-info">
                                <div class="info-title">
                                    <a href="#">【官网价直降50】鸿星尔克官方旗舰运动鞋男 夏季网面透气轻便休闲跑步鞋男运动鞋</a>
                                </div>
                                <p class="info-price">定金：¥200.00</p>
                            </div>
                        </div>
                        <div class="img-item">
                            <p class="tab-pic">
                                <a href="#">
                                    <img src="./images/1.jpg" />
                                </a>
                            </p>
                            <div class="tab-info">
                                <div class="info-title">
                                    <a href="#">【官网价直降50】鸿星尔克官方旗舰运动鞋男 夏季网面透气轻便休闲跑步鞋男运动鞋</a>
                                </div>
                                <p class="info-price">定金：¥200.00</p>
                            </div>
                        </div>
                        <div class="img-item">
                            <p class="tab-pic">
                                <a href="#">
                                    <img src="./images/1.jpg" />
                                </a>
                            </p>
                            <div class="tab-info">
                                <div class="info-title">
                                    <a href="#">【官网价直降50】鸿星尔克官方旗舰运动鞋男 夏季网面透气轻便休闲跑步鞋男运动鞋</a>
                                </div>
                                <p class="info-price">定金：¥200.00</p>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
</template>

<script>
export default {
name:'',
}

</script>

<style scoped lang="less">
     .rank {
        width: 1200px;
        margin: 0 auto;

        .tab {
            margin: 0 auto;
            overflow: hidden;
            width: 312px;

            .tab-tit {
                text-align: center;

                a {
                    display: block;
                    padding: 0 18px;
                    float: left;
                    text-decoration: none;
                    font-size: 16px;
                    color: #999;

                    p {
                        margin: 5px 0;
                    }

                    .img {
                        i {
                            width: 35px;
                            height: 35px;
                            display: block;
                            background: url(./images/bg0.png);
                            margin-left: 10px;
                        }
                    }

                    .text {
                        line-height: 28px;
                    }
                }

                .on {
                    color: #9e3c42;

                    .img {
                        i {
                            background-position: -35px 0;
                        }
                    }
                }
            }
        }

        .content {
            overflow: hidden;
            padding: 10px;

            ul {
                li {
                    overflow: hidden;
                    list-style: none;
                    line-height: 18px;

                    .img-item {
                        border: 1px solid #9e3c42;
                        width: 269px;
                        float: left;
                        overflow: hidden;
                        margin: 0 12px 10px;
                        background: #fff;

                        .tab-pic {
                            width: 230px;
                            height: 210px;
                            overflow: hidden;
                            text-align: center;
                            margin: 5px auto 18px;

                            a {
                                img {
                                    width: 200px;
                                    height: 200px;
                                }
                            }
                        }

                        .tab-info {
                            background: #fafafa;

                            .info-title {
                                height: 50px;
                                line-height: 28px;
                                overflow: hidden;
                                margin: 0 auto;
                                padding-left: 10px;

                                a {
                                    color: #333;
                                    text-decoration: none;
                                }
                            }

                            .info-price {
                                font-size: 20px;
                                color: #9e3c42;
                                height: 35px;
                                padding-left: 10px;
                                display: block;
                                line-height: 24px;
                                margin: 10px auto 0;
                            }
                        }
                    }
                }
            }
        }
    }

</style>
