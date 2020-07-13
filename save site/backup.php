<?php
/**
 * Backup your entire public_html with this script hopefully.
 */
?>
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>000webhosting community backup script</title>
	<style type="text/css">
		body{
			font-family: arial;
			font-size: 14px;
			padding: 0;
			margin: 0;
			text-align: center;
		}
		h3{
			text-align: center;
		}
		.container{
			width: 600px;
			margin: 100px auto 0 auto;
			max-width: 100%;
		}
		label{
			font-weight: bold;
			margin: 10px 0;
		}
		input[type="text"]{
			border: 1px solid #eee;
			padding: 10px;
			display: block;
			margin: 10px auto;
		}
		input[type="submit"]{
			padding: 10px 20px;
			display: block;
			margin: 10px auto;
			border: 2px solid green;
			background: #fff;
		}
		.copyright{
			position: fixed;
			bottom:0;
			background: #333;
			color: #fff;
			width: 100%;
			padding: 10px 20px;
			text-align: center;
		}
		.copyright a{
			color: #eee;
		}
	</style>
</head>
<body>
	<div class="container">
		<h2>000WEBHOST Community Backup Script</h2>
		<img src="https://www.000webhost.com/static/default.000webhost.com/images/logo.png " alt="logo">
<h3>Ensure this backup.php is uploaded into your PUBLIC_HTML directory if you want a full backup</h3>
		<form action="" method="POST">
			<label for="zip-file-name">Backup File Name</label> <br>
			<input type="text" id="zip-file-name" name="zip_file_name" value="" placeholder="Choose a suitable backup name" />
			<input type="submit" value="Backup into a zip file" />
		</form>
		<?php
			if(isset($_POST['zip_file_name'])){
				if(!empty($_POST['zip_file_name'])){
					ini_set('max_execution_time', 1000000);
					/* creates a compressed zip file */
					function generate_zip_file($files = array(),$destination = '',$overwrite = false) {
						//if the zip file already exists and overwrite is false, return false
						if(file_exists($destination) && !$overwrite) { return false; }
						//vars
						$valid_files = array();
						//if files were passed in...
						if(is_array($files)) {
							//cycle through each file
							foreach($files as $file) {
								//make sure the file exists
								if(file_exists($file)) {
									$valid_files[] = $file;
								}
							}
						}
						//if we have good files...
						if(count($valid_files)) {
							//create the archive
							$zip = new ZipArchive();
							if($zip->open($destination,$overwrite ? ZIPARCHIVE::OVERWRITE : ZIPARCHIVE::CREATE) !== true) {
								return false;
							}
							//add the files
							foreach($valid_files as $file) {
								$zip->addFile($file,$file);
							}
							//debug
							//echo 'The zip archive contains ',$zip->numFiles,' files with a status of ',$zip->status;

							//close the zip -- done!
							$zip->close();

							//check to make sure the file exists
							return file_exists($destination);
						}
						else
						{
							return false;
						}
					}

					function getDirItems($dir, &$results = array()){
					    $files = scandir($dir);
					    foreach($files as $key => $value){
					        $path = realpath($dir.DIRECTORY_SEPARATOR.$value);
					        list($unused_path, $used_path) = explode(basename(__DIR__).'/', $path);
					        $file_name = $dir.DIRECTORY_SEPARATOR.$value;
					        if(!is_dir($path)) {
					            $results[] = $used_path;
					        } else if($value != "." && $value != "..") {
					            getDirItems($path, $results);
					            $results[] = $value.'/';
					        }
					    }
					    return $results;
					}
					$get_name = $_POST['zip_file_name'];
					$get_ext  = '.zip';
					$final_name = $get_name.$get_ext;
					//if true, good; if false, zip creation failed
					$result = generate_zip_file(getDirItems(dirname(__FILE__)),$final_name);
					if($result){
						echo "Successfully Created a backup of your 000webhost public_html directory in Zip file $final_name";
					} else {
						echo "Failed to create zip file, Please try again, if you are still having issues seek community assistance on the forum. It mostly likely is that your site is too big for the backup script to run within the free limits - you'll be better off downloading your public_html via FTP client instead.";
					}
				} else {
					echo "Please provide a suitable ZIP File Name for your 000webhost Backup";
				}
			}
		?>
	</div>

	<div class="copyright">000webhost Community Backup Method&copy; <?php echo date("Y"); ?> .  <a href="http://000webhost.com/forum/" target="_blank">Community Forums</a></div>
</body>
</html>
