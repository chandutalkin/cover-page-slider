var j=0;
var t;


	function imgSlider(id_val,click)
	{	
		//Number of time images in the slider
		var total_imgs=$(".cvr_image").length;
		
		if(click==0){
			t = setTimeout(function () {
				$(".circular").removeClass("orange");
				$(".cvr_image").removeClass("display");
				$("#c"+(j%total_imgs)).addClass("orange");
				$("#img_"+(j%total_imgs)).addClass("display");
				$(".main_heading").hide();
				$("#main_heading_"+(j%total_imgs)).fadeIn();
				j++;
				imgSlider(j,0);
			},3000);
		}
		else{
			$(".circular").removeClass("orange");
			$("#"+id_val).addClass("orange");
			$(".cvr_image").removeClass("display");
			var id_num = id_val.replace('c',"");
			$("#img_"+id_num).addClass("display");
			$(".main_heading").hide();
			$("#main_heading_"+id_num).show();
			var check = (id_num%total_imgs)-(j%total_imgs);
			if(check>=0)
				id_num=j+check;
			else
				id_num=j+check+total_imgs;
			j=id_num;
			j++;
			clearTimeout(t);
			imgSlider(j,0);
		}
	}
	$(document).ready(function(){
		imgSlider('c0');
	});