import * as AlertTypes from './AlertTypes'

export default class AlertMsg {

    constructor(_type, _header, _subHeader, _breadcrumbs, _description, _list = []){
        this.type = _type;
        this.header = _header;
        this.subHeader = _subHeader;
        this.breadcrumbs = _breadcrumbs;
        this.description = _description;
        this.list = _list;
    }





    /***************************************/
    /*            Error Messages           */
    /***************************************/

    static BadIdentityName(){
        return new AlertMsg(
            AlertTypes.Error,
            'Bad Identity Name',
            'Error',
            ['Identity', 'Name'],
            'Identity names must be between 3 and 20 characters long. ' +
            'They must also be alphanumeric ' +
            'but may also contain spaces, dashes, and underscores.'
        );
    }

    static IdentityNameExists(){
        return new AlertMsg(
            AlertTypes.Error,
            'Identity Name Exists',
            'Error',
            ['Identity', 'Name'],
            'This Identity name is registered to another Identity.'
        );
    }

    static InvalidPrivateKey(){
        return new AlertMsg(
            AlertTypes.Error,
            'Invalid Private Key',
            'Error',
            ['Identity','Import Account'],
            'The private key you entered seems to be invalid. Please check the ' +
            'key and try again.'
        );
    }

    static NoAccountsFound(){
        return new AlertMsg(
            AlertTypes.Error,
            'No Accounts Found',
            'Error',
            ['Identity','Import Account'],
            'No accounts were found connected to this private key. ' +
            'If you want to import a key which is not generated by ' +
            'Scatter you will need to create an account for the key ' +
            'before importing it.'
        );
    }

    static BadAccountName(){
        return new AlertMsg(
            AlertTypes.Error,
            'Bad Account Name',
            'Error',
            ['Identity', 'Account', 'Name'],
            'Account names must be at least 2 characters long and are limited to the letters ' +
            'a-z ( lowercase ) and the numbers 1-5. If the account name is 13 characters long ' +
            'the last character is limited to a-j.'
        );
    }

    static AccountNameExists(){
        return new AlertMsg(
            AlertTypes.Error,
            'Account Name Exists',
            'Error',
            ['Identity', 'Account', 'Name'],
            'This EOS account name already exists.'
        );
    }

    static CantRemoveLastIdentity(){
        return new AlertMsg(
            AlertTypes.Error,
            'Removing Last Identity',
            'Error',
            ['Identity', 'Remove'],
            'You must have at least one Identity on Scatter. Create another if you want to remove this one.'
        );
    }

    static PasswordsDoNotMatch(){
        return new AlertMsg(
            AlertTypes.Error,
            'Passwords Do Not Match',
            'Error',
            ['Scatter', 'Create Account'],
            'The password you entered does not match it\'s confirmation.'
        );
    }

    static BadPassword(){
        return new AlertMsg(
            AlertTypes.Error,
            'Bad Password',
            'Error',
            ['Scatter', 'Create Account'],
            'Passwords must be at least 8 characters long'
        );
    }

    static WrongPassword(){
        return new AlertMsg(
            AlertTypes.Error,
            'Wrong Password',
            'Error',
            ['Scatter', 'Authentication'],
            'The password you entered was incorrect.'
        );
    }

    static NetworkHostInvalid(){
        return new AlertMsg(
            AlertTypes.Error,
            'Network Host Invalid',
            'Error',
            ['Networks', 'New Network'],
            'The Network host you entered was invalid. Hosts should be either a domain name ' +
            '( ex: testnet.eos.io ) or an IP ( ex: 192.168.0.1 ).'
        );
    }

    static NetworkPortInvalid(){
        return new AlertMsg(
            AlertTypes.Error,
            'Network Port Invalid',
            'Error',
            ['Networks', 'New Network'],
            'The Network port you entered was invalid. Ports should numeric only and be either 80, or above 1000.'
        );
    }

    static NetworkExists(){
        return new AlertMsg(
            AlertTypes.Error,
            'Network Already Exists',
            'Error',
            ['Networks', 'New Network'],
            'Another Network with this host and port already exists. There is no reason to have a network saved twice.'
        );
    }

    static RemovingEndorsedNetwork(){
        return new AlertMsg(
            AlertTypes.Error,
            'Cannot Remove Endorsed Network',
            'Error',
            ['Networks', 'Remove'],
            'You cannot remove Scatter\'s endorsed Network. We use this Network to host our contracts.'
        );
    }

    static NoIdentityWithProperties(fields){
        return new AlertMsg(
            AlertTypes.Error,
            'No Identities Found',
            'Error',
            ['Request', 'Identity'],
            `This application is requesting an Identity with properties you do not have. The properties they want are '${fields.join(', ')}'`
        );
    }

    static YouMustSelectAnIdentity(){
        return new AlertMsg(
            AlertTypes.Error,
            'You Must Select An Identity',
            'Error',
            ['Request', 'Identity'],
            'If you do not wish to expose an Identity you can press the Deny button, otherwise an Identity must be ' +
            'selected in order to accept this request.'
        );
    }





    /***************************************/
    /*               Prompts               */
    /***************************************/

    static AreYouSure(header, breadcrumbs, description){
        return new AlertMsg(AlertTypes.Prompt, header, 'Prompt', breadcrumbs, description);
    }

    static SelectAccount(accounts){
        return new AlertMsg(
            AlertTypes.SelectAccount,
            'Select Account',
            'Prompt',
            ['Identity', 'Account', 'Import'],
            'Select the account and authority you wish to use for this Identity. You can only select one at a time.',
            accounts
        );
    }

}