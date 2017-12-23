/**
 * @Author: MichaelChen <mymac>
 * @Date:   2017-10-24T10:20:07+08:00
 * @Email:  teacherincafe@163.com
 * @Project: one_server
 * @Filename: dummyData.js
 * @Last modified by:   mymac
 * @Last modified time: 2017-11-02T15:07:12+08:00
 */



const dummy = {
  swiperImgUrls: [
    'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
    'https://www.smashingmagazine.com/wp-content/uploads/2015/06/10-dithering-opt.jpg'
  ],
  list: [
    {
      likeNum: 1,
      id: 1,
      isFixed: true,
      time: '10天前',
      text: 'hello world',
      isanonymous: true,
      tag: '失物招领',
      images: [
        'https://www.smashingmagazine.com/wp-content/uploads/2015/06/10-dithering-opt.jpg',
        'https://www.smashingmagazine.com/wp-content/uploads/2015/06/10-dithering-opt.jpg',
        'https://www.smashingmagazine.com/wp-content/uploads/2015/06/10-dithering-opt.jpg',
        'https://beebom-redkapmedia.netdna-ssl.com/wp-content/uploads/2016/01/Reverse-Image-Search-Engines-Apps-And-Its-Uses-2016.jpg',
        'http://www.gettyimages.ca/gi-resources/images/Homepage/Hero/UK/CMS_Creative_164657191_Kingfisher.jpg'
      ],
      user: {
        isAdmin: true,
        isAuthor: false,
        avatar: '../assets/svgs/avatar/avatar.svg',
        nickname: '陈泽铭',
        gender: 'male'
      },
      location: {
        locationName: '莱茵河畔的臭水沟',
        latitude: '100',
        longitude: '100'
      },
      commentNum: 12
    },
    {
      likeNum: 1,
      id: 1,
      isFixed: false,
      time: '1天前',
      text: '都是虚假的，有什么好伤神的~',
      isanonymous: false,
      tag: '情感',
      images: [
        'https://www.smashingmagazine.com/wp-content/uploads/2015/06/10-dithering-opt.jpg',
        'https://www.smashingmagazine.com/wp-content/uploads/2015/06/10-dithering-opt.jpg',
        'https://www.smashingmagazine.com/wp-content/uploads/2015/06/10-dithering-opt.jpg',
        'http://www.gettyimages.ca/gi-resources/images/Homepage/Hero/UK/CMS_Creative_164657191_Kingfisher.jpg'
      ],
      user: {
        isAdmin: true,
        isAuthor: true,
        avatar: '../assets/svgs/avatar/avatar.svg',
        nickname: 'michale chen and uncle john',
        gender: 'female'
      },
      location: {
        locationName: '莱茵河畔的臭水沟',
        latitude: '100',
        longitude: '100'
      },
      commentNum: 12
    },
    {
      likeNum: 1,
      id: 1,
      isFixed: false,
      time: '1天前',
      text: '都是虚假的，有什么好伤神的~',
      isanonymous: true,
      tag: '小秘密',
      images: [
        'https://www.smashingmagazine.com/wp-content/uploads/2015/06/10-dithering-opt.jpg',
        'http://www.gettyimages.ca/gi-resources/images/Homepage/Hero/UK/CMS_Creative_164657191_Kingfisher.jpg'
      ],
      user: {
        isAdmin: true,
        isAuthor: false,
        avatar: '../assets/svgs/avatar/avatar.svg',
        nickname: 'michale chen',
        gender: 'male'
      },
      location: {
        locationName: '莱茵河畔的臭水沟',
        latitude: '100',
        longitude: '100'
      },
      commentNum: 12
    },
    {
      likeNum: 1,
      id: 1,
      isFixed: false,
      time: '1天前',
      text: '都是虚假的，有什么好伤神的~',
      isanonymous: true,
      tag: '兼职',
      images: [
        'http://www.gettyimages.ca/gi-resources/images/Homepage/Hero/UK/CMS_Creative_164657191_Kingfisher.jpg'
      ],
      user: {
        isAdmin: true,
        avatar: '../assets/svgs/avatar/avatar.svg',
        nickname: 'michale chen',
        gender: 'female'
      },
      location: {
        locationName: '莱茵河畔的臭水沟',
        latitude: '100',
        longitude: '100'
      },
      commentNum: 12
    },
    {
      likeNum: 1,
      id: 1,
      isFixed: true,
      time: '1天前',
      text: '都是虚假的，有什么好伤神的~',
      isanonymous: false,
      tag: '活动',
      images: [
        'http://www.gettyimages.ca/gi-resources/images/Homepage/Hero/UK/CMS_Creative_164657191_Kingfisher.jpg'
      ],
      user: {
        isAdmin: false,
        isAuthor: false,
        avatar: '../assets/svgs/avatar/avatar.svg',
        nickname: 'michale chen',
        gender: 'female'
      },
      location: {
        locationName: '莱茵河畔的臭水沟',
        latitude: '100',
        longitude: '100'
      },
      commentNum: 12
    }
  ],
  unreadMessages: [
    {
      bid: 1,
      nid: 2,
      isUnread: false,
      time: '一千年以前',
      content: '昨天孔子找我喝茶，太抠了',
      isanonymous: false,
      blog: {
        text: '玄武湖我发现了一个秘密山洞'
      },
      user: {
        avatar: '../assets/svgs/avatar/avatar.svg',
        nickname: '隔壁老王',
        gender: 'male'
      }
    },
    {
      bid: 1,
      nid: 2,
      isUnread: true,
      isanonymous: true,
      time: '一千年以前',
      content: '昨天孔子找我喝茶，太抠了',
      blog: {
        text: '玄武湖我发现了一个秘密山洞2'
      },
      user: {
        avatar: '../assets/svgs/avatar/avatar.svg',
        nickname: '陈泽铭',
        gender: 'female'
      }
    },
    {
      bid: 1,
      nid: 2,
      isUnread: false,
      isanonymous: true,
      time: '一千年以前',
      content: '昨天孔子找我喝茶，太抠了',
      blog: {
        text: '玄武湖我发现了一个秘密山洞3'
      },
      user: {
        avatar: '../assets/svgs/avatar/avatar.svg',
        nickname: '隔壁老王',
        gender: 'male'
      }
    },
    {
      bid: 1,
      nid: 2,
      isUnread: false,
      isanonymous: false,
      time: '一千年以前',
      content: '昨天孔子找我喝茶，太抠了',
      blog: {
        text: '玄武湖我发现了一个秘密山洞4'
      },
      user: {
        avatar: '../assets/svgs/avatar/avatar.svg',
        nickname: '陈泽铭',
        gender: 'female'
      }
    },
    {
      bid: 1,
      nid: 2,
      isUnread: true,
      isanonymous: false,
      time: '一千年以前',
      content: '昨天孔子找我喝茶，太抠了',
      blog: {
        text: '玄武湖我发现了一个秘密山洞5'
      },
      user: {
        avatar: '../assets/svgs/avatar/avatar.svg',
        nickname: '隔壁老王',
        gender: 'female'
      }
    },
    {
      bid: 1,
      nid: 2,
      isUnread: true,
      isanonymous: true,
      time: '一千年以前',
      content: '昨天孔子找我喝茶，太抠了',
      blog: {
        text: '玄武湖我发现了一个秘密山洞6'
      },
      user: {
        avatar: '../assets/svgs/avatar/avatar.svg',
        nickname: '陈泽铭',
        gender: 'female'
      }
    },{
      bid: 1,
      nid: 2,
      isUnread: false,
      isanonymous: false,
      time: '一千年以前',
      content: '昨天孔子找我喝茶，太抠了',
      blog: {
        text: '玄武湖我发现了一个秘密山洞7'
      },
      user: {
        avatar: '../assets/svgs/avatar/avatar.svg',
        nickname: '隔壁老王',
        gender: 'female'
      }
    }
  ],
  blogs: [
    {
      id: 1,
      content: '想说什么，我无语了，竟然还有这样无耻下流肮脏的幼稚可爱小丫头',
      images: [
        'https://www.smashingmagazine.com/wp-content/uploads/2015/06/10-dithering-opt.jpg',
        'https://beebom-redkapmedia.netdna-ssl.com/wp-content/uploads/2016/01/Reverse-Image-Search-Engines-Apps-And-Its-Uses-2016.jpg'
      ],
      latitude: '100',
      longitude: '100',
      location: '沙家浜'
    },
    {
      id: 1,
      content: '想说什么，话说五百年前的那次战斗，我们的族人自此沦落',
      images: [
        'https://www.smashingmagazine.com/wp-content/uploads/2015/06/10-dithering-opt.jpg',
        'https://beebom-redkapmedia.netdna-ssl.com/wp-content/uploads/2016/01/Reverse-Image-Search-Engines-Apps-And-Its-Uses-2016.jpg'
      ],
      latitude: '100',
      longitude: '100',
      location: '沙家浜'
    }
  ],
  blogDetail: {
    id: 1,
    tag: '校园新鲜事',
    isAuthor: true,
    commentNum: 12,
    likeNum: 10,
    isanonymous: false,
    comments: [
      {
        nickname: '卢瑨威',
        openid: 'xsf1',
        isAdmin: true,
        isanonymous: false,
        time: '一千年以前',
        cid: 1,
        gender: 'male',
        avatar: '../assets/svgs/avatar/avatar.svg',
        content: '大学生活还是挺无拘无束的'
      },
      {
        nickname: '陈泽铭',
        openid: 'xsf1',
        isAdmin: true,
        isanonymous: true,
        time: '一千年以前',
        cid: 1,
        gender: 'female',
        avatar: '../assets/svgs/avatar/avatar.svg',
        content: '同感'
      }
    ],
    user: {
      avatar: '../assets/svgs/avatar/avatar.svg',
      nickname: '张方舒',
      gender: 'female'
    },
    time: '上古时期',
    device: 'iphone 99',
    text: '大三了？',
    images: [
      'https://www.smashingmagazine.com/wp-content/uploads/2015/06/10-dithering-opt.jpg',
      'https://beebom-redkapmedia.netdna-ssl.com/wp-content/uploads/2016/01/Reverse-Image-Search-Engines-Apps-And-Its-Uses-2016.jpg'
    ],
    location: {
      latitude: '100',
      longitude: 'longitude',
      locationName: '金门大桥旁的摩拜单车停车场'
    },
    like: 21
  }
}
module.exports =  { dummy }
