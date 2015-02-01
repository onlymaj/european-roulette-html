		function elemination(io){
				io.css('background','none').find('div').fadeOut('fast');
			}
			function resetEl(io){
				io.css('background','').find('div').fadeIn('fast');
			}
			$(document).ready(function(){

				//***** for top buttons
				$('[id^="btn"] div').toggle(function(){
					var num = parseInt($(this).parent().attr('id').slice(3));
					var btn = (num - 1) * 3 +1;
					for(i=0;i<3;i++)
						elemination($('#cell'+(btn+i) ));
				},function(){
					var num = parseInt($(this).parent().attr('id').slice(3));
					var btn = (num - 1) * 3 +1;
					for(i=0;i<3;i++)
						resetEl($('#cell'+(btn+i) ));
				});

				//****** for column buttons
				$('[id^="col"] div').toggle(function(){
					var num = parseInt($(this).parent().attr('id').slice(3));
					for(i=1;i<35;i+=3)
						elemination($('#cell'+(i+(num-1)) ));
				},function(){
					var num = parseInt($(this).parent().attr('id').slice(3));
					for(i=1;i<35;i+=3)
						resetEl($('#cell'+(i+(num-1)) ));
				});

				//****** for betrows buttons

				$('[id^="br"] div').toggle(function(){
					var num = (parseInt($(this).parent().attr('id').slice(2)) -1) * 3;
					for(i=1;i<26;i+=12)
						for(j=0;j<3;j++)
							elemination($('#cell'+(i+num+j) ));
				},function(){
					var num = (parseInt($(this).parent().attr('id').slice(2)) -1) * 3;
					for(i=1;i<26;i+=12)
						for(j=0;j<3;j++)
							resetEl($('#cell'+(i+num+j) ));
				});

				//******* last bottom buttons
				$('[id^="ibr"] div').toggle(function(){
					var num = (parseInt($(this).parent().attr('id').slice(3)) -1) * 12;
					for(i=1;i<13;i++)
						elemination($('#cell'+(i+num) ));
				},function(){
					var num = (parseInt($(this).parent().attr('id').slice(3)) -1) * 12;
					for(i=1;i<13;i++)
						resetEl($('#cell'+(i+num) ));
				});


			});
