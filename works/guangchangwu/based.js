window.onload=function(){
	
	//���ż�Ч��
	var star1=document.getElementsByClassName('star')[0];					//��ȡ�����ֲ��ż�
	var star2=document.getElementsByClassName('star')[1];					//��ȡ����Ƶ���ż�
	var music_area=document.getElementById('music_area');
																							
	star1.addEventListener('click',function(evt){
			var e = evt || window.evt;
			e.stopPropagation();																//��ֹ�¼���ɢ��ð�ݡ�����
			this.style.display = 'none';
			this.parentNode.className = 'revolve_animation';
			 music_area.animationPlayState="running";
			window.open( "http://music.163.com/#/search/m/?s=%E5%B9%BF%E5%9C%BA%E8%88%9E&type=1") 
	});
	
	star2.addEventListener('click',function(){
			this.style.display = 'none';
			window.open('http://www.youku.com');
	});
	
	
	music_area.addEventListener('click',function(){
		star1.style.display = 'block';
		this.style.animationPlayState="paused";
	
	});
	 
	//���ż�Ч������
	
	//��ά��Ч��(��JQ�ĵ��뵭��Ч��)
	var $erweima=$('#erweima');
	var $about_us=$('#about_us');
	$about_us.mouseenter(function(){
		$erweima.fadeIn();
	});
	$about_us.mouseleave(function(){
		$erweima.fadeOut();
	});
	/* $about_us.click(function(){												//����̶���ά��
		$erweima.css('display','block');
	}); */
	//��ά��Ч������
	
	//�װ���Ч��
	var $user = $('nav p');
	for(var i = 0 ; i < $user.length ; i++){
		$user.eq(i).mouseenter(function(){
			$(this).css('border-bottom','solid 3px #E0FFFF');
		});
		$user.eq(i).mouseleave(function(){
			$(this).css('border-bottom','none');
		});
	};
	//�װ���Ч������
	
	//��������Ч��
	var $i_information=$('#i_information');
	var $information=$('nav p').eq(0);
	var times = 1;														//ͳ��times-1�Ϳ��Ի�ȡ�û�����˶��ٴ�
	$information.click(function(){
		if(times % 2){													//��2����Ϊ��
			$i_information.fadeIn();
			times++;
		}else{
			$i_information.fadeOut();
			times++;
		}
	});
	
	
	
	//��������Ч������
	
	
	
	
	
	
	
	
	
	
	
	
	
	
}