encrypt:
	@sops --encrypt --in-place --encrypted-regex 'APIKEY|TOKEN|PASSWORD|SECRETKEY' ${filename}
	@echo "file encrypted -> ${filename}"

encrypt-userfile:
	@sops --encrypt --in-place --encrypted-regex 'password' ${filename}
	@echo "file encrypted -> ${filename}"

decrypt:
	@sops --decrypt --in-place --encrypted-regex 'APIKEY|TOKEN|PASSWORD|SECRETKEY' ${filename}
	@echo "file decrypted -> ${filename}"

decrypt-userfile:
	@sops --decrypt --in-place --encrypted-regex 'password' ${filename}
	@echo "file decrypted -> ${filename}"